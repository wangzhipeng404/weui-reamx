import React from 'react';
import Cells from '../../weui-miniprogram/cells/cells';
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
export interface ICells {
	title?: string;
	extClass?: string;
	footer?: string;
}

const WeCells: React.FC<ICells> = ({
	title = "",
	extClass = "",
	footer = "",
	children,
}) => (
  <Cells 
		title={title}
		extClass={extClass}
		footer={footer}

  >
    {children}
  </Cells>
)
export default WeCells
