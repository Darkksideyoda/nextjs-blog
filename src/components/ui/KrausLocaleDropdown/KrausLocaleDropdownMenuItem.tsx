import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

type KrausLocaleDropdownMenuItemProps = {
  flagIcon: StaticImageData;
  flagAltText: string;
  languageOption: string;
};

const KrausLocaleDropdownMenuItem: FC<KrausLocaleDropdownMenuItemProps> = (props: KrausLocaleDropdownMenuItemProps) => {
  const { flagAltText, flagIcon, languageOption } = props;

  return (
    <div className="flex justify-evenly py-1">
      <Image width="20" src={flagIcon} alt={flagAltText} />
      {languageOption === 'en' ? <span> {'english_option'} </span> : <span> {'turkish_option'}</span>}
    </div>
  );
};

export default KrausLocaleDropdownMenuItem;
