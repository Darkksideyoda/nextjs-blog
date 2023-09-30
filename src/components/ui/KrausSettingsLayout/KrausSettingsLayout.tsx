'use client';

import React, { FC } from 'react';

import KrausBattery from '../KrausBattery/KrausBattery';
import KrausTooltip from '../KrausTooltip/KrausTooltip';
import SiteConfigurationPopover from './SiteConfigurationPopover';

const KrausSettingsLayout: FC = () => {
  return (
    <>
      <KrausBattery value={35} />
      <SiteConfigurationPopover />
      <KrausTooltip content="Settings" tooltipAnchorSelector="Settings Popover" />
    </>
  );
};

export default KrausSettingsLayout;
