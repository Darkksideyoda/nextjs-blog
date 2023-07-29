'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react';
import useSound from 'use-sound';

import { SfxPath } from '../../../constants/Sounds';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';

const KrausThemeSwitcher: FC = () => {
  const t = useTranslations('navbar.settings_layout.theme_switcher');

  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [playHoverSfx, { stop: stopHoverSfx }] = useSound(SfxPath.buttonHoveSfx ?? '');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitcherOnClick = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const tooltipText = theme === 'light' ? t('tooltip_dark') : t('tooltip_light');
  const icon = theme === 'light' ? <MoonIcon /> : <SunIcon />;

  return (
    <div className="tooltip-primary h-8 w-8 lg:tooltip lg:tooltip-bottom" data-tip={tooltipText}>
      <motion.button
        name="Theme Switch Button"
        aria-label="Theme Switch Button"
        onClick={handleThemeSwitcherOnClick}
        onMouseEnter={() => playHoverSfx()}
        onMouseLeave={() => stopHoverSfx()}
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.button>
    </div>
  );
};

export default KrausThemeSwitcher;
