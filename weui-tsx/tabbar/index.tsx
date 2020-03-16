import React from 'react';
import Tabbar from '../../weui-miniprogram/tabbar/tabbar';
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
export interface ITabbar {
	extClass?: string;
	list?: any[];
	current?: number;
	bindchange?: (e: EventArg) => any;
}

const WeTabbar: React.FC<ITabbar> = ({
	extClass = "",
	list = [],
	current = 0,
	bindchange = (e) => {},
	children,
}) => (
  <Tabbar 
		extClass={extClass}
		list={list}
		current={current}
		bindchange={bindchange}

  >
    {children}
  </Tabbar>
)
export default WeTabbar
