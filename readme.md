# weui-remax

## 简介
本项目将原生weui组件包裹成了tsx供remax小程序使用，未经严格测试

## 用法
将本项目克隆至remax小程序组件目录或者下载converter.js调整输入输出目录运行，然后再page里引入weui-tsx里面的组件即可

## 做了什么
收集了原生组件的prop和event做了简单的类型提示，没有类型提示太蛋疼了

## 已知问题
Uploader无法上传，因为原生组件里面判断了typeof upload ==== function，经过remax编译，typeof upload 会变成 string导致无法上传

