import React from 'react';
import Actionsheet from '../../weui-miniprogram/actionsheet/actionsheet';
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
export interface IActionsheet {
	title?: string;
	showCancel?: boolean;
	cancelText?: string;
	maskClass?: string;
	extClass?: string;
	maskClosable?: boolean;
	mask?: boolean;
	show?: boolean;
	actions?: any[];
	bindactiontap?: (e: EventArg) => any;
	bindclose?: (e: EventArg) => any;
}

const WeActionsheet: React.FC<IActionsheet> = ({
	title = "",
	showCancel = true,
	cancelText = "取消",
	maskClass = "",
	extClass = "",
	maskClosable = true,
	mask = true,
	show = false,
	actions = [],
	bindactiontap = (e) => {},
	bindclose = (e) => {},
}) => (
  <Actionsheet 
		title={title}
		showCancel={showCancel}
		cancelText={cancelText}
		maskClass={maskClass}
		extClass={extClass}
		maskClosable={maskClosable}
		mask={mask}
		show={show}
		actions={actions}
		bindactiontap={bindactiontap}
		bindclose={bindclose}
/>
)
export default WeActionsheet
