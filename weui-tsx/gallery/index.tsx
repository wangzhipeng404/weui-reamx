import React from 'react';
import Gallery from '../../weui-miniprogram/gallery/gallery';
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
export interface IGallery {
	imgUrls?: any[];
	showDelete?: boolean;
	show?: boolean;
	current?: number;
	hideOnClick?: boolean;
	extClass?: boolean;
	bindchange?: (e: EventArg) => any;
	binddelete?: (e: EventArg) => any;
	bindhide?: (e: EventArg) => any;
}

const WeGallery: React.FC<IGallery> = ({
	imgUrls = [],
	showDelete = true,
	show = true,
	current = 0,
	hideOnClick = true,
	extClass = "",
	bindchange = (e) => {},
	binddelete = (e) => {},
	bindhide = (e) => {},
	children,
}) => (
  <Gallery 
		imgUrls={imgUrls}
		showDelete={showDelete}
		show={show}
		current={current}
		hideOnClick={hideOnClick}
		extClass={extClass}
		bindchange={bindchange}
		binddelete={binddelete}
		bindhide={bindhide}

  >
    {children}
  </Gallery>
)
export default WeGallery
