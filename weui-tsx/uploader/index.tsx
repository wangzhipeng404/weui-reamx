import React from 'react';
import Uploader from '../../weui-miniprogram/uploader/uploader';
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
export interface IUploader {
	title?: string;
	sizeType?: Partial<["original","compressed"]> | '[]';
	sourceType?: Partial<["album","camera"]> | '[]';
	maxSize?: number;
	maxCount?: number;
	files?: any[];
	select?: (arg: any, ...args: any[]) => any;
	upload?: (arg: any, ...args: any[]) => any;
	tips?: string;
	extClass?: string;
	showDelete?: boolean;
	bindfail?: (e: EventArg) => any;
	bindselect?: (e: EventArg) => any;
	bindsuccess?: (e: EventArg) => any;
	bindcancel?: (e: EventArg) => any;
	binddelete?: (e: EventArg) => any;
}

const WeUploader: React.FC<IUploader> = ({
	title = "图片上传",
	sizeType = ["original","compressed"],
	sourceType = ["album","camera"],
	maxSize = 5242880,
	maxCount = 1,
	files = [],
	select = function value() {},
	upload = null,
	tips = "",
	extClass = "",
	showDelete = true,
	bindfail = (e) => {},
	bindselect = (e) => {},
	bindsuccess = (e) => {},
	bindcancel = (e) => {},
	binddelete = (e) => {},
	children,
}) => (
  <Uploader 
		title={title}
		sizeType={sizeType}
		sourceType={sourceType}
		maxSize={maxSize}
		maxCount={maxCount}
		files={files}
		select={select}
		upload={upload}
		tips={tips}
		extClass={extClass}
		showDelete={showDelete}
		bindfail={bindfail}
		bindselect={bindselect}
		bindsuccess={bindsuccess}
		bindcancel={bindcancel}
		binddelete={binddelete}

  >
    {children}
  </Uploader>
)
export default WeUploader
