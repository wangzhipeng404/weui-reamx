import React from 'react';
import VideoSwiper from '../../weui-miniprogram/video-swiper/video-swiper';
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
export interface IVideoSwiper {
	duration?: number;
	easingFunction?: string;
	loop?: boolean;
	videoList?: any[];
	bindchange?: (e: EventArg) => any;
	bindplay?: (e: EventArg) => any;
	bindpause?: (e: EventArg) => any;
	bindended?: (e: EventArg) => any;
	binderror?: (e: EventArg) => any;
	bindtimeupdate?: (e: EventArg) => any;
	bindwait?: (e: EventArg) => any;
	bindprogress?: (e: EventArg) => any;
	bindloadedmetadata?: (e: EventArg) => any;
}

const WeVideoSwiper: React.FC<IVideoSwiper> = ({
	duration = 500,
	easingFunction = "default",
	loop = true,
	videoList = [],
	bindchange = (e) => {},
	bindplay = (e) => {},
	bindpause = (e) => {},
	bindended = (e) => {},
	binderror = (e) => {},
	bindtimeupdate = (e) => {},
	bindwait = (e) => {},
	bindprogress = (e) => {},
	bindloadedmetadata = (e) => {},
}) => (
  <VideoSwiper 
		duration={duration}
		easingFunction={easingFunction}
		loop={loop}
		videoList={videoList}
		bindchange={bindchange}
		bindplay={bindplay}
		bindpause={bindpause}
		bindended={bindended}
		binderror={binderror}
		bindtimeupdate={bindtimeupdate}
		bindwait={bindwait}
		bindprogress={bindprogress}
		bindloadedmetadata={bindloadedmetadata}
/>
)
export default WeVideoSwiper
