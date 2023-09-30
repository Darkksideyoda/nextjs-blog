'use client';

import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import KrausAudioSwitcher from '../KrausAudioSwitcher/KrausAudioSwitcher';
import KrausIconPopover from '../KrausIconPopover/KrausIconPopover';
import KrausThemeSwitcher from '../KrausThemeSwitcher/KrausThemeSwitcher';

function SiteConfigurationPopover() {
  return (
    <div role="button" aria-label="Settings Popover" className="flex items-center justify-center text-center">
      <KrausIconPopover
        iconComponent={<IoSettingsOutline className="text-white" role="button" size={20} />}
        popoverChildrens={[
          <KrausThemeSwitcher key="Theme Switcher" />,
          <KrausAudioSwitcher key="Audion On Off Toggle" />
        ]}
      />
    </div>
  );
}

export default SiteConfigurationPopover;
