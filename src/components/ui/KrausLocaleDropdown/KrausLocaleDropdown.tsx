'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import React, { useTransition } from 'react';
import useSound from 'use-sound';

import { SfxPath } from '../../../constants/Sounds';
import TranslationIcon from '../icons/TranslationIcon';

function KrausLocaleDropdown() {
  const t = useTranslations('navbar.settings_layout.locale_dropdown');

  const [playHoverSfx, { stop: stopHoverSfx }] = useSound(SfxPath.buttonHoveSfx ?? '');
  const [playClickSfx] = useSound(SfxPath.buttonClickSfx ?? '', {
    volume: 0.4
  });
  const { theme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange = (selectedLanguage: string) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(/^\/\w+/, `/${selectedLanguage}`);
    playClickSfx();
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="dropdown-bottom dropdown-end dropdown-hover dropdown cursor-pointer">
      <motion.div
        onMouseEnter={() => playHoverSfx()}
        onMouseLeave={() => stopHoverSfx()}
        tabIndex={0}
        whileHover={{ scale: 2.1 }}
      >
        <TranslationIcon />
      </motion.div>
      <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-32 bg-base-100 p-2 shadow">
        <li
          className={clsx({
            'rounded-lg bg-violet-500 text-white': locale === 'en' && theme === 'light' && !isPending,
            'rounded-lg bg-teal-500/95 text-black': locale === 'en' && theme === 'dark'
          })}
        >
          <a onClick={() => onLanguageChange('en')}>{`🇺🇸${t('english_option')}`}</a>
        </li>
        <li
          className={clsx({
            'rounded-lg bg-violet-500 text-white': locale === 'tr' && theme === 'light',
            'rounded-lg bg-teal-500/95 text-black': locale === 'tr' && theme === 'dark'
          })}
        >
          <a onClick={() => onLanguageChange('tr')}>{`🇹🇷${t('turkish_option')}`}</a>
        </li>
      </ul>
    </div>
  );
}

export default KrausLocaleDropdown;
