'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import React, { useState, useTransition } from 'react';

import TurkeyFlagIcon from '../../../../public/Images/turkey_flag.png';
import UsaFlagIcon from '../../../../public/Images/usa_flag.png';
import { SfxPath } from '../../../constants/Sounds';
import TranslationIcon from '../icons/TranslationIcon';
import KrausSfxDiv from '../KrausSfxComponents/KrausSfxDiv/KrausSfxDiv';
import KrausTranslationLoader from '../KrausTranslationLoader/KrausTranslationLoader';
import KrausLocaleDropdownMenuItem from './KrausLocaleDropdownMenuItem';

function KrausLocaleDropdown() {
  const { theme } = useTheme();
  const [, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange = (selectedLanguage: string) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(/^\/\w+/, `/${selectedLanguage}`);
    startTransition(() => {
      router.replace(newPath);
    });
    localStorage.setItem('bk_locale', selectedLanguage);
  };

  const [showLoader, setShowLoader] = useState(false);

  const handleOnClick = (languageOption: string) => {
    setShowLoader(true);

    const modelInterval = setInterval(() => {
      window.my_modal_1.showModal();
    });

    const modelTimeOut = setTimeout(() => {
      onLanguageChange(languageOption);
      setShowLoader(false);
      clearInterval(modelInterval);
      clearTimeout(modelTimeOut);
    }, 2000);
  };

  return (
    <div className="dropdown-bottom dropdown-end dropdown-hover dropdown cursor-pointer">
      <KrausSfxDiv hoverSfxPath={SfxPath.buttonHoveSfx} tabIndex={0} whileHover={{ scale: 2.1 }}>
        <TranslationIcon />
      </KrausSfxDiv>

      <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] my-2 w-32 bg-base-100 shadow">
        <KrausLocaleDropdownMenuItem
          locale={locale}
          theme={theme}
          flagIcon={UsaFlagIcon}
          flagAltText="USA Flag"
          languageOption="en"
          onClick={handleOnClick}
        />

        <KrausLocaleDropdownMenuItem
          locale={locale}
          theme={theme}
          flagIcon={TurkeyFlagIcon}
          flagAltText="Turkey Flag"
          languageOption="tr"
          onClick={handleOnClick}
        />
      </ul>

      {showLoader && <KrausTranslationLoader />}
    </div>
  );
}

export default KrausLocaleDropdown;
