import React from 'react';
import Msg from '../../weui-miniprogram/msg/msg';
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
export interface IMsg {
	title?: string;
	type?: string;
	icon?: string;
	desc?: string;
	extClass?: string;
	size?: number;
}

const WeMsg: React.FC<IMsg> = ({
	title = "",
	type = "",
	icon = "",
	desc = "",
	extClass = "",
	size = 64,
}) => (
  <Msg 
		title={title}
		type={type}
		icon={icon}
		desc={desc}
		extClass={extClass}
		size={size}
/>
)
export default WeMsg
