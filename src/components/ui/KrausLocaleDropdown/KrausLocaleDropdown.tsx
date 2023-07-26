'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import React, { useState, useTransition } from 'react';
import useSound from 'use-sound';

import TurkeyFlagIcon from '../../../../public/Images/turkey_flag.png';
import UsaFlagIcon from '../../../../public/Images/usa_flag.png';
import { SfxPath } from '../../../constants/Sounds';
import TranslationIcon from '../icons/TranslationIcon';
import KrausTranslationLoader from '../KrausTranslationLoader/KrausTranslationLoader';

function KrausLocaleDropdown() {
  const t = useTranslations('navbar.settings_layout.locale_dropdown');

  const [playHoverSfx, { stop: stopHoverSfx }] = useSound(SfxPath.buttonHoveSfx ?? '');
  const [playClickSfx] = useSound(SfxPath.buttonClickSfx ?? '', {
    volume: 0.4
  });
  const { theme } = useTheme();
  const [, startTransition] = useTransition();
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

  const [showLoader, setShowLoader] = useState(false);

  const handleOnClick = (lang: string) => {
    setShowLoader(true);

    const modelInterval = setInterval(() => {
      window.my_modal_1.showModal();
    });

    const modelTimeOut = setTimeout(() => {
      onLanguageChange(lang);
      setShowLoader(false);
      clearInterval(modelInterval);
      clearTimeout(modelTimeOut);
    }, 2000);
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
            'rounded-lg bg-violet-500 text-white': locale === 'en' && theme === 'light',
            'rounded-lg bg-teal-500/95 text-black': locale === 'en' && theme === 'dark'
          })}
        >
          <a onClick={() => handleOnClick('en')}>
            <Image width="30" src={UsaFlagIcon} alt="USA Flag" />
            {`${t('english_option')}`}
          </a>
        </li>
        <li
          className={clsx({
            'rounded-lg bg-violet-500 text-white': locale === 'tr' && theme === 'light',
            'rounded-lg bg-teal-500/95 text-black': locale === 'tr' && theme === 'dark'
          })}
        >
          <a onClick={() => handleOnClick('tr')}>
            <Image width="30" src={TurkeyFlagIcon} alt="Turkey Flag" />
            {`${t('turkish_option')}`}
          </a>
        </li>
      </ul>

      {showLoader && <KrausTranslationLoader />}
    </div>
  );
}

export default KrausLocaleDropdown;
