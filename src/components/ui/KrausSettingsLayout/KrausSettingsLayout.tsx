import React, { FC } from 'react';

import KrausAudioSwitcher from '../KrausAudioSwitcher/KrausAudioSwitcher';
import KrausLocaleDropdown from '../KrausLocaleDropdown/KrausLocaleDropdown';
import KrausThemeSwitcher from '../KrausThemeSwitcher/KrausThemeSwitcher';

const KrausSettingsLayout: FC = () => {
  return (
    <div className="flex h-10 w-44 items-center justify-around rounded-xl px-2 transition duration-300 hover:bg-base-content/20">
      <KrausThemeSwitcher />
      <KrausAudioSwitcher />
      <KrausLocaleDropdown />
    </div>
  );
};

export default KrausSettingsLayout;
