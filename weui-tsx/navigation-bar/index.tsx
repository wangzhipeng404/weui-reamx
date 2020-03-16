import React from 'react';
import NavigationBar from '../../weui-miniprogram/navigation-bar/navigation-bar';
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
export interface INavigationBar {
	extClass?: string;
	title?: string;
	background?: string;
	color?: string;
	back?: boolean;
	loading?: boolean;
	animated?: boolean;
	show?: boolean;
	delta?: number;
	bindback?: (e: EventArg) => any;
}

const WeNavigationBar: React.FC<INavigationBar> = ({
	extClass = "",
	title = "",
	background = "",
	color = "",
	back = true,
	loading = false,
	animated = true,
	show = true,
	delta = 1,
	bindback = (e) => {},
	children,
}) => (
  <NavigationBar 
		extClass={extClass}
		title={title}
		background={background}
		color={color}
		back={back}
		loading={loading}
		animated={animated}
		show={show}
		delta={delta}
		bindback={bindback}

  >
    {children}
  </NavigationBar>
)
export default WeNavigationBar
