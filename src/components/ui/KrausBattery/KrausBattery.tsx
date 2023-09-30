'use client';

import { Spinner } from '@nextui-org/react';
import {
  Battery1,
  Battery2,
  Battery3,
  Battery4,
  Battery5,
  Battery6,
  Battery7,
  Battery8,
  Battery10,
  BatteryCharge
} from '@styled-icons/fluentui-system-regular';
// import { block } from 'million/react';
import React, { useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { useBattery } from 'react-use';

import KrausTooltip from '../KrausTooltip/KrausTooltip';

type Props = {
  value: number;
};

const KrausBattery: React.FC<Props> = () => {
  const size = '30';
  const batteryState = useBattery();
  const [batteryTooltip, setBatteryTooltipText] = useState('');

  const renderBattery = () => {
    if (isMobile || isTablet || !batteryState?.isSupported) {
      return { batteryIcon: null, tooltipText: '' };
    }
    if (!batteryState.fetched) {
      return { batteryIcon: <Spinner />, tooltipText: '' };
    }

    const { charging, level } = batteryState ?? {};
    let batteryIcon = null;
    let tooltipText = '';

    const levelRanges = [
      { min: 0, max: 10, icon: <Battery1 size={size} color="red" /> },
      { min: 10, max: 20, icon: <Battery2 size={size} color="red" /> },
      { min: 20, max: 30, icon: <Battery3 size={size} color="orange" /> },
      { min: 30, max: 40, icon: <Battery4 size={size} color="yellow" /> },
      { min: 40, max: 50, icon: <Battery5 size={size} color="yellow" /> },
      { min: 50, max: 60, icon: <Battery6 size={size} color="gold" /> },
      { min: 60, max: 70, icon: <Battery7 size={size} color="gold" /> },
      { min: 70, max: 80, icon: <Battery8 size={size} color="gold" /> },
      { min: 80, max: Infinity, icon: <Battery10 size={size} color="#39FF14" /> }
    ];

    const roundedLevel = Number((level * 100).toFixed(0)); // Dizeden sayıya dönüştürme

    for (const range of levelRanges) {
      if (range.min < roundedLevel && roundedLevel <= range.max) {
        batteryIcon = range.icon;
        tooltipText = range.max === Infinity ? roundedLevel + '%' : roundedLevel + '%';
        break;
      }
    }

    if (charging) {
      tooltipText = 'Your Battery is Charging';
      batteryIcon = <BatteryCharge size={size} color="forecolor" />;
    }

    return { batteryIcon, tooltipText };
  };

  const { batteryIcon, tooltipText } = renderBattery();

  useEffect(() => {
    setBatteryTooltipText(tooltipText);
  }, [tooltipText]);

  return (
    <div className="flex items-center justify-center text-center" aria-label="Battery Tooltip">
      {batteryIcon}
      {batteryIcon && <KrausTooltip content={batteryTooltip} tooltipAnchorSelector="Battery Tooltip" />}
    </div>
  );
};
// const KrausBatteryBlock = block(KrausBattery);

// export default KrausBatteryBlock;
export default KrausBattery;
