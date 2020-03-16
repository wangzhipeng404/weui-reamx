import React from 'react';
import Searchbar from '../../weui-miniprogram/searchbar/searchbar';
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
export interface ISearchbar {
	extClass?: string;
	focus?: boolean;
	placeholder?: string;
	value?: string;
	search?: (arg: any, ...args: any[]) => any;
	throttle?: number;
	cancelText?: string;
	cancel?: boolean;
	bindclear?: (e: EventArg) => any;
	bindfocus?: (e: EventArg) => any;
	bindblur?: (e: EventArg) => any;
	bindinput?: (e: EventArg) => any;
	bindselectresult?: (e: EventArg) => any;
}

const WeSearchbar: React.FC<ISearchbar> = ({
	extClass = "",
	focus = false,
	placeholder = "搜索",
	value = "",
	search = null,
	throttle = 500,
	cancelText = "取消",
	cancel = true,
	bindclear = (e) => {},
	bindfocus = (e) => {},
	bindblur = (e) => {},
	bindinput = (e) => {},
	bindselectresult = (e) => {},
}) => (
  <Searchbar 
		extClass={extClass}
		focus={focus}
		placeholder={placeholder}
		value={value}
		search={search}
		throttle={throttle}
		cancelText={cancelText}
		cancel={cancel}
		bindclear={bindclear}
		bindfocus={bindfocus}
		bindblur={bindblur}
		bindinput={bindinput}
		bindselectresult={bindselectresult}
/>
)
export default WeSearchbar
