import React from 'react';
import Loading from '../../weui-miniprogram/loading/loading';
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
export interface ILoading {
	extClass?: string;
	show?: boolean;
	animated?: boolean;
	duration?: number;
	type?: string;
	tips?: string;
}

const WeLoading: React.FC<ILoading> = ({
	extClass = "",
	show = true,
	animated = false,
	duration = 350,
	type = "dot-gray",
	tips = "加载中",
	children,
}) => (
  <Loading 
		extClass={extClass}
		show={show}
		animated={animated}
		duration={duration}
		type={type}
		tips={tips}

  >
    {children}
  </Loading>
)
export default WeLoading
