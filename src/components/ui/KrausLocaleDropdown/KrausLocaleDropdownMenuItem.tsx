import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { SfxPath } from '../../../constants/Sounds';
import KrausSfxButton from '../KrausSfxComponents/KrausSfxButton/KrausSfxButton';

type KrausLocaleDropdownMenuItemProps = {
  locale: string;
  theme: string | undefined;
  flagIcon: StaticImageData;
  flagAltText: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (languageOption: string) => void;
  languageOption: string;
};

const KrausLocaleDropdownMenuItem: FC<KrausLocaleDropdownMenuItemProps> = (props: KrausLocaleDropdownMenuItemProps) => {
  const { flagAltText, flagIcon, languageOption, locale, onClick, theme } = props;
  const t = useTranslations('navbar.settings_layout.locale_dropdown');

  return (
    <li
      className={clsx(
        {
          'rounded-lg bg-violet-500 text-white': locale === languageOption && theme === 'light',
          'rounded-lg bg-teal-500/95 text-black': locale === languageOption && theme === 'dark'
        },
        'my-0.5 w-full'
      )}
    >
      <KrausSfxButton
        className="hover:w-[112px] "
        clickSfxPath={SfxPath.buttonClickSfx}
        onClick={() => onClick(languageOption)}
        name={`Set App Language To ${languageOption === 'en' ? 'English' : 'Turkish'}`}
        aria-label={`Set App Language To ${languageOption === 'en' ? 'English' : 'Turkish'}`}
      >
        <Image width="20" src={flagIcon} alt={flagAltText} />
        {languageOption === 'en' ? <span> {t('english_option')} </span> : <span> {t('turkish_option')}</span>}
      </KrausSfxButton>
    </li>
  );
};

export default KrausLocaleDropdownMenuItem;
