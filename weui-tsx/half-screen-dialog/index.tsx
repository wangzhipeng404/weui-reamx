import React from 'react';
import HalfScreenDialog from '../../weui-miniprogram/half-screen-dialog/half-screen-dialog';
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
export interface IHalfScreenDialog {
	closabled?: boolean;
	title?: string;
	subTitle?: string;
	extClass?: string;
	desc?: string;
	tips?: string;
	maskClosable?: boolean;
	mask?: boolean;
	show?: boolean;
	buttons?: any[];
	bindclose?: (e: EventArg) => any;
	bindbuttontap?: (e: EventArg) => any;
}

const WeHalfScreenDialog: React.FC<IHalfScreenDialog> = ({
	closabled = true,
	title = "",
	subTitle = "",
	extClass = "",
	desc = "",
	tips = "",
	maskClosable = true,
	mask = true,
	show = false,
	buttons = [],
	bindclose = (e) => {},
	bindbuttontap = (e) => {},
}) => (
  <HalfScreenDialog 
		closabled={closabled}
		title={title}
		subTitle={subTitle}
		extClass={extClass}
		desc={desc}
		tips={tips}
		maskClosable={maskClosable}
		mask={mask}
		show={show}
		buttons={buttons}
		bindclose={bindclose}
		bindbuttontap={bindbuttontap}
/>
)
export default WeHalfScreenDialog
