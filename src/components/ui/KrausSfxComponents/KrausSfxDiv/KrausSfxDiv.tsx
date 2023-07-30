'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import React, { FC, useContext } from 'react';
import useSound from 'use-sound';

import { KrausSfxContext, KrausSfxContextParams } from '../Context';

interface KrausSfxDivProps extends HTMLMotionProps<'div'> {
  hoverSfxPath?: string;
  clickSfxPath?: string;
  hoverVolume?: number;
  clickVolume?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const KrausSfxDiv: FC<KrausSfxDivProps> = (props: KrausSfxDivProps) => {
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
    <motion.div onClick={handleOnClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} {...rest}>
      {children}
    </motion.div>
  );
};

export default KrausSfxDiv;
