import React from 'react';
import Form from '../../weui-miniprogram/form/form';
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
export interface IForm {
	models?: {[key: string]: any};
	rules?: any[];
	extClass?: string;
}

const WeForm: React.FC<IForm> = ({
	models = {},
	rules = [],
	extClass = "",
	children,
}) => (
  <Form 
		models={models}
		rules={rules}
		extClass={extClass}

  >
    {children}
  </Form>
)
export default WeForm
