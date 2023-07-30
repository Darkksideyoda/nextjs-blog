'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import React, { FC, useContext } from 'react';
import useSound from 'use-sound';

import { KrausSfxContext, KrausSfxContextParams } from '../Context';

interface KrausSfxButtonProps extends HTMLMotionProps<'button'> {
  hoverSfxPath?: string;
  clickSfxPath?: string;
  hoverVolume?: number;
  clickVolume?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const KrausSfxButton: FC<KrausSfxButtonProps> = (props: KrausSfxButtonProps) => {
  const {
    children,
    clickSfxPath,
    clickVolume = 1.5,
    hoverSfxPath,
    hoverVolume = 1.5,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;

  const { isSfxEnabled } = useContext<KrausSfxContextParams>(KrausSfxContext);

  const [playHoverSfx, { stop: stopHoverSfx }] = useSound(hoverSfxPath ?? '', {
    volume: isSfxEnabled === 'true' ? hoverVolume : 0
  });
  const [playClickSfx] = useSound(clickSfxPath ?? '', {
    volume: isSfxEnabled === 'true' ? clickVolume : 0
  });
  const handleOnMouseEnter = () => {
    playHoverSfx();
    onMouseEnter?.();
  };
  const handleOnMouseLeave = () => {
    stopHoverSfx();
    onMouseLeave?.();
  };
  const handleOnClick = () => {
    playClickSfx();
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default KrausSfxButton;
