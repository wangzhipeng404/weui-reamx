var path = require('path')
var fs = require('fs')

// 配置收集器
let properties = {}
let events = []
function Component(config) {
  if (config) {
    properties = config.properties
    events = []
    let eventMap = {}
    if (config.methods) {
      Object.keys(config.methods).forEach(key => {
        let methodStr = config.methods[key].toString()
        methodStr.replace(/triggerEvent\(["']{1}([^,]*)["']{1}/g, ($1, $2) => {
          eventMap[$2] = true
        })
        methodStr.replace(/trigger\(e,\s+["']{1}([^,]*)["']{1}\)/g, ($1, $2) => {
          eventMap[$2] = true
        })
      })
    }
    events = Object.keys(eventMap)
  } else {
    properties = {}
  }
}
global.Component = Component

//首字母大写
function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

//收集目录下所有组件的config
function getEntries(dir) {
  var dirPath = path.resolve(dir)
  var entries = []
  const files = fs.readdirSync(dirPath)
  files.forEach(function(filename) {
    var filedir = path.join(dirPath, filename)
    var stats = fs.statSync(filedir)
    var isFile = stats.isFile() 
    var isDir = stats.isDirectory()
    if (isFile) {
      var arr = filename.split('.')
      if (arr[1] == 'wxml') {
        var jsPath = path.join(dirPath, arr[0] + '.js')
        let component = require(jsPath)
        entries.push({
          name: arr[0],
          path: jsPath,
          dirPath: dirPath,
          properties: { ...properties },
          events: [...events],
        })
      }
    }
    if (isDir) {
      entries = entries.concat(getEntries(filedir)) //递归
    }
  })
  return entries
}

// 根据组件proptie的type生成ts type
function getType(desc) {
  if (!desc) {
    return {
      type: 'any',
      value: undefined,
    }
  }
  let type = undefined
  let value = 'undefined'
  let tsType = 'any'
  if (typeof(desc) === 'string') {
    type = desc
  }
  if (typeof(desc) === 'object') {
    type = desc.type
    value = desc.value
  }
  if (type === Array ) {
    let arrType = 'any[]'
    if (value && value.length > 0) {
      arrType = `Partial<${JSON.stringify(value)}> | '[]'`
    }
    tsType = arrType
  }
  if (type === Object) {
    tsType =  '{[key: string]: any}'
  }
  if (type === Function) {
    tsType = '(arg: any, ...args: any[]) => any'
    if (value) {
      value
    }
  }
  if (type === Boolean) {
    tsType = 'boolean'
  }
  if (type === Number) {
    tsType = 'number'
  }
  if (type === String) {
    tsType = 'string'
  }
  if (value !== null || value !== undefined) {
    let oldValue = value
    value = JSON.stringify(value)
    // 处理value 为fucntion value () {} 的情况
    if (value === undefined) {
      value = oldValue.toString()
    }
  }
  return {
    type: tsType,
    value: value,
  }
}

// 更加propties 和 events 生成组件的interface,和props展开
// 由于组件并不支持{...props},所以要把参数展开并添加默认值
function getBlockString (name, properties, evt) {
  let typeArr = []
  let defaultValueArr = []
  let attrArr = []
  if (properties) {
    Object.keys(properties).forEach(key => {
      let { type, value } = getType(properties[key])
      typeArr.push(`\t${key}?: ${type};\n`)
      defaultValueArr.push(`\t${key} = ${value},\n`)
      attrArr.push(`\t\t${key}={${key}}\n`)
    })
  }
  evt.forEach(key => {
    let fixedkey = `bind${key}`
    typeArr.push(`\t${fixedkey}?: (e: EventArg) => any;\n`)
    defaultValueArr.push(`\t${fixedkey} = (e) => {},\n`)
    attrArr.push(`\t\t${fixedkey}={${fixedkey}}\n`)
  })
  return {
    interface: `export interface I${name} {\n${typeArr.join('')}}`,
    defaultValue: `{\n${defaultValueArr.join('')}}`,
    attr: `${attrArr.join('')}`,
  }
}

// 生成文件内容
function renderTsx (name, properties, evt, relativePath) {
  let relateData = getBlockString(name, properties, evt)
  return (
`import React from 'react';
import ${name} from '${relativePath.replace(/\\/g, '/').replace(/^.*node_modules\//gi, '')}';
interface EventArg {
  type: string;
  timeStamp: string;
  target: {
    id: string;
    dataset: { [key: string]: any }
  };
  currentTarget: {
    id: string;
    dataset: { [key: string]: any }
  };
  mark: {
    [key: string]: any,
  };
  detail: {
    [key: string]: any,
  };
  touches: {
    identifier: number;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }[];
  changedTouches: {
    identifier: number;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }[];
  CanvasTouch: any;
}
${relateData.interface}

const We${name}: React.FC<I${name}> = (${relateData.defaultValue}) => (
  <${name} 
${relateData.attr}/>
)
export default We${name}
`
  )
}

// 获取目录是否存着
function getStat(path){
  return new Promise((resolve, reject) => {
      fs.stat(path, (err, stats) => {
          if(err){
              resolve(false);
          }else{
              resolve(stats);
          }
      })
  })
}


function mkdir(dir){
  return new Promise((resolve, reject) => {
      fs.mkdir(dir, err => {
          if(err){
              resolve(false);
          }else{
              resolve(true);
          }
      })
  })
}

//判断文件夹是否存在，不存在则创建
async function dirExists(dir){
  let isExists = await getStat(dir);
  //如果该路径且不是文件，返回true
  if(isExists && isExists.isDirectory()){
      return true;
  }else if(isExists){     //如果该路径存在但是文件，返回false
      return false;
  }
  //如果该路径不存在
  let tempDir = path.parse(dir).dir;      //拿到上级路径
  //递归判断，如果上级目录也不存在，则会代码会在此处继续循环执行，直到目录存在
  let status = await dirExists(tempDir);
  let mkdirStatus;
  if(status){
      mkdirStatus = await mkdir(dir);
  }
  return mkdirStatus;
}

// 输出文件
async function outPut (component) {
  const mkdirStatus = await dirExists(component.outputPath)
  if (mkdirStatus) {
    let filePath = path.join(component.outputPath, 'index.tsx')
    console.log(`begin write ${filePath}`)
    fs.writeFileSync(filePath, component.tsx)
    console.log(`finish write ${filePath}`)
  }
}

function run (refferDir, targetDir) {
  const refferPath = path.resolve(refferDir)
  const targetPath = path.resolve(targetDir)
  console.log('begin getEntries')
  const entries = getEntries(refferDir)
  console.log('finished getEntries')
  console.log('开始转换')
  const components = entries.map(entry => {
    let upcasedName = entry.name.split('-').map(name => firstUpperCase(name)).join('')
    let outPutPath = entry.dirPath.replace(refferPath, targetPath)
    return {
      name: entry.name,
      upcasedName: upcasedName,
      tsx: renderTsx(upcasedName, entry.properties, entry.events, `${path.relative(outPutPath, entry.dirPath)}/${entry.name}`),
      path: entry.path,
      dirPath: entry.dirPath,
      outputPath: outPutPath,
    }
  })
  components.forEach(async (component) => {
    await outPut(component)
  })
}

//输入目录
const refferDir = './weui-miniprogram'
// 输出目录
const targetDir = './weui-tsx'

run(refferDir, targetDir)