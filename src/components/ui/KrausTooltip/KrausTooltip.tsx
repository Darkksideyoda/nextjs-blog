'use client';

import React from 'react';
import { isMobile } from 'react-device-detect';
import { ITooltip, PlacesType, Tooltip } from 'react-tooltip';

type Props = ITooltip & {
  tooltipAnchorSelector: string;
  isArrow?: boolean;
  placement?: PlacesType;
  content?: string;
  children?: React.ReactNode;
  height?: number;
  bgColor?: string;
};

function KrausTooltip(props: Props) {
  const {
    bgColor = 'rgb(63,63,70)',
    children = null,
    content = 'Tooltip',
    height,
    isArrow = false,
    placement = 'bottom',
    tooltipAnchorSelector,
    ...rest
  } = props;

  return (
    <Tooltip
      content={content}
      place={placement}
      noArrow={!isArrow}
      style={{ backgroundColor: bgColor, borderRadius: '6px', height: height }}
      anchorSelect={`[aria-label^='${tooltipAnchorSelector}']`}
      hidden={isMobile}
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

export default KrausTooltip;
