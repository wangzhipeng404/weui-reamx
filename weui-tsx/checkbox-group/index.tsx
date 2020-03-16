import React from 'react';
import CheckboxGroup from '../../weui-miniprogram/checkbox-group/checkbox-group';
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
export interface ICheckboxGroup {
	multi?: boolean;
	extClass?: string;
	prop?: string;
	bindchange?: (e: EventArg) => any;
}

const WeCheckboxGroup: React.FC<ICheckboxGroup> = ({
	multi = true,
	extClass = "",
	prop = "",
	bindchange = (e) => {},
	children,
}) => (
  <CheckboxGroup 
		multi={multi}
		extClass={extClass}
		prop={prop}
		bindchange={bindchange}

  >
    {children}
  </CheckboxGroup>
)
export default WeCheckboxGroup
