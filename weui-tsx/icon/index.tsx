import React from 'react';
import Icon from '../../weui-miniprogram/icon/icon';
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
export interface IIcon {
	extClass?: string;
	type?: string;
	icon?: string;
	size?: number;
	color?: string;
}

const WeIcon: React.FC<IIcon> = ({
	extClass = "",
	type = "outline",
	icon = "",
	size = 20,
	color = "#000000",
	children,
}) => (
  <Icon 
		extClass={extClass}
		type={type}
		icon={icon}
		size={size}
		color={color}

  >
    {children}
  </Icon>
)
export default WeIcon
