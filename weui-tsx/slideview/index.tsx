import React from 'react';
import Slideview from '../../weui-miniprogram/slideview/slideview';
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
export interface ISlideview {
	extClass?: string;
	buttons?: any[];
	disable?: boolean;
	icon?: boolean;
	show?: boolean;
	duration?: number;
	throttle?: number;
	rebounce?: number;
	bindbuttontap?: (e: EventArg) => any;
	bindhide?: (e: EventArg) => any;
	bindshow?: (e: EventArg) => any;
}

const WeSlideview: React.FC<ISlideview> = ({
	extClass = "",
	buttons = [],
	disable = false,
	icon = false,
	show = false,
	duration = 350,
	throttle = 40,
	rebounce = 0,
	bindbuttontap = (e) => {},
	bindhide = (e) => {},
	bindshow = (e) => {},
	children,
}) => (
  <Slideview 
		extClass={extClass}
		buttons={buttons}
		disable={disable}
		icon={icon}
		show={show}
		duration={duration}
		throttle={throttle}
		rebounce={rebounce}
		bindbuttontap={bindbuttontap}
		bindhide={bindhide}
		bindshow={bindshow}

  >
    {children}
  </Slideview>
)
export default WeSlideview
