import React from 'react';
import FormPage from '../../weui-miniprogram/form-page/form-page';
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
export interface IFormPage {
	title?: string;
	subtitle?: string;
}

const WeFormPage: React.FC<IFormPage> = ({
	title = "",
	subtitle = "",
}) => (
  <FormPage 
		title={title}
		subtitle={subtitle}
/>
)
export default WeFormPage
