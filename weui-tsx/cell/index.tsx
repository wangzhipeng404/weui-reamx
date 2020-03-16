import React from 'react';
import Cell from '../../weui-miniprogram/cell/cell';
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
export interface ICell {
	hover?: boolean;
	link?: boolean;
	extClass?: string;
	iconClass?: string;
	bodyClass?: string;
	icon?: string;
	title?: string;
	value?: string;
	showError?: boolean;
	prop?: string;
	url?: string;
	footerClass?: string;
	footer?: string;
	inline?: boolean;
	hasHeader?: boolean;
	hasFooter?: boolean;
	hasBody?: boolean;
	bindnavigatesuccess?: (e: EventArg) => any;
	bindnavigateerror?: (e: EventArg) => any;
}

const WeCell: React.FC<ICell> = ({
	hover = false,
	link = false,
	extClass = "",
	iconClass = "",
	bodyClass = "",
	icon = "",
	title = "",
	value = "",
	showError = false,
	prop = "",
	url = "",
	footerClass = "",
	footer = "",
	inline = true,
	hasHeader = true,
	hasFooter = true,
	hasBody = true,
	bindnavigatesuccess = (e) => {},
	bindnavigateerror = (e) => {},
	children,
}) => (
  <Cell 
		hover={hover}
		link={link}
		extClass={extClass}
		iconClass={iconClass}
		bodyClass={bodyClass}
		icon={icon}
		title={title}
		value={value}
		showError={showError}
		prop={prop}
		url={url}
		footerClass={footerClass}
		footer={footer}
		inline={inline}
		hasHeader={hasHeader}
		hasFooter={hasFooter}
		hasBody={hasBody}
		bindnavigatesuccess={bindnavigatesuccess}
		bindnavigateerror={bindnavigateerror}

  >
    {children}
  </Cell>
)
export default WeCell
