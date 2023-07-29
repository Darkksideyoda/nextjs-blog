'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react';

import AudioIcon from '../icons/AudioIcon';
import AudioMuteIcon from '../icons/AudioMuteIcon';

const KrausAudioSwitcher: FC = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      name="Audio Switch Button"
      aria-label="Theme Switch Button"
      onClick={handleThemeChange}
      whileHover={{ scale: 2.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? <AudioIcon /> : <AudioMuteIcon />}
    </motion.button>
  );
};

export default KrausAudioSwitcher;
