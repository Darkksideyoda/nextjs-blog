'use client';

import { OverlayPlacement } from '@nextui-org/aria-utils/dist/overlays/types';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import React from 'react';
import { isMobile } from 'react-device-detect';
type Props = {
  popoverChildrens?: React.ReactNode[];
  placement?: OverlayPlacement | undefined;
  iconComponent?: React.ReactNode;
  className?: string;
  isBackDrop?: 'blur' | 'transparent' | 'opaque' | undefined;
  name?: string;
};

function KrausIconPopover(props: Props) {
  const {
    className,
    iconComponent,
    isBackDrop = 'transparent',
    name = 'Icon Popover',
    placement = 'bottom',
    popoverChildrens
  } = props;

  return (
    <Popover
      aria-label={name}
      backdrop={isMobile === true ? 'transparent' : isBackDrop}
      className={className}
      placement={placement}
    >
      <PopoverTrigger>
        <span className="rounded-full bg-zinc-700 p-1">{iconComponent}</span>
      </PopoverTrigger>
      <PopoverContent aria-label={name}>
        <div className="flex items-center gap-8 px-2 py-2 text-center">{popoverChildrens}</div>
      </PopoverContent>
    </Popover>
  );
}

export default KrausIconPopover;
