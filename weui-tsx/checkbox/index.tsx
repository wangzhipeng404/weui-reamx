import React from 'react';
import Checkbox from '../../weui-miniprogram/checkbox/checkbox';
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
export interface ICheckbox {
	multi?: boolean;
	checked?: boolean;
	value?: string;
	label?: string;
	extClass?: string;
	bindchange?: (e: EventArg) => any;
}

const WeCheckbox: React.FC<ICheckbox> = ({
	multi = true,
	checked = false,
	value = "",
	label = "label",
	extClass = "",
	bindchange = (e) => {},
	children,
}) => (
  <Checkbox 
		multi={multi}
		checked={checked}
		value={value}
		label={label}
		extClass={extClass}
		bindchange={bindchange}

  >
    {children}
  </Checkbox>
)
export default WeCheckbox
