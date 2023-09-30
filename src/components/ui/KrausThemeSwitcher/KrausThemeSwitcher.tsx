'use client';

import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react';
import { GoMoon, GoSun } from 'react-icons/go';

import KrausSfxButton from '../KrausSfxComponents/KrausSfxButton/KrausSfxButton';

const KrausThemeSwitcher: FC = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitcherOnClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="my-auto flex">
      <KrausSfxButton
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleThemeSwitcherOnClick}
        name="Theme Switch Button"
        aria-label="Theme Switch Button"
      >
        {theme === 'light' ? <GoSun size={19} /> : <GoMoon size={19} />}
      </KrausSfxButton>
    </div>
  );
};

export default KrausThemeSwitcher;
