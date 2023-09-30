'use client';

import { HTMLMotionProps, motion } from 'framer-motion';
import React, { FC } from 'react';
import { useLocalStorage } from 'react-use';
import useSound from 'use-sound';

interface KrausSfxDivProps extends HTMLMotionProps<'div'> {
  hoverVolume?: number;
  clickVolume?: number;
  isPlayClickSound?: boolean;
  isPlayHoverSound?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const KrausSfxDiv: FC<KrausSfxDivProps> = (props: KrausSfxDivProps) => {
  const {
    children,
    clickVolume = 1.5,
    hoverVolume = 1.5,
    isPlayClickSound = false,
    isPlayHoverSound = true,
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;

  const [isSfxEnabled] = useLocalStorage<boolean>('bk_useSound', true);

  const [playHoverSfx, { stop: stopHoverSfx }] = useSound('/Sounds/buttonHoverSfx.mp3' ?? '', {
    volume: isSfxEnabled === true && isPlayHoverSound ? hoverVolume : 0
  });
  const [playClickSfx] = useSound('/Sounds/buttonClickSfx.mp3' ?? '', {
    volume: isSfxEnabled === true && isPlayClickSound ? clickVolume : 0
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
