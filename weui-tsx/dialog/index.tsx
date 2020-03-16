import React from 'react';
import Dialog from '../../weui-miniprogram/dialog/dialog';
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
export interface IDialog {
	title?: string;
	extClass?: string;
	maskClosable?: boolean;
	mask?: boolean;
	show?: boolean;
	buttons?: any[];
	bindbuttontap?: (e: EventArg) => any;
	bindclose?: (e: EventArg) => any;
}

const WeDialog: React.FC<IDialog> = ({
	title = "",
	extClass = "",
	maskClosable = true,
	mask = true,
	show = false,
	buttons = [],
	bindbuttontap = (e) => {},
	bindclose = (e) => {},
	children,
}) => (
  <Dialog 
		title={title}
		extClass={extClass}
		maskClosable={maskClosable}
		mask={mask}
		show={show}
		buttons={buttons}
		bindbuttontap={bindbuttontap}
		bindclose={bindclose}

  >
    {children}
  </Dialog>
)
export default WeDialog
