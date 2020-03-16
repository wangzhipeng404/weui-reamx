import React from 'react';
import Toptips from '../../weui-miniprogram/toptips/toptips';
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
export interface IToptips {
	type?: string;
	show?: boolean;
	msg?: string;
	delay?: number;
	extClass?: string;
	bindhide?: (e: EventArg) => any;
}

const WeToptips: React.FC<IToptips> = ({
	type = "error",
	show = false,
	msg = "",
	delay = 2000,
	extClass = "",
	bindhide = (e) => {},
}) => (
  <Toptips 
		type={type}
		show={show}
		msg={msg}
		delay={delay}
		extClass={extClass}
		bindhide={bindhide}
/>
)
export default WeToptips
