import React from 'react';
import Badge from '../../weui-miniprogram/badge/badge';
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
export interface IBadge {
	extClass?: string;
	content?: string;
}

const WeBadge: React.FC<IBadge> = ({
	extClass = "",
	content = "",
	children,
}) => (
  <Badge 
		extClass={extClass}
		content={content}

  >
    {children}
  </Badge>
)
export default WeBadge
