'use client';

import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

import { SfxPath } from '../../../constants/Sounds';
import AudioIcon from '../icons/AudioIcon';
import AudioMuteIcon from '../icons/AudioMuteIcon';
import KrausSfxButton from '../KrausSfxButton/KrausSfxButton';

const KrausAudioSwitcher: FC = () => {
  const t = useTranslations('navbar.settings_layout.audio_switcher');

  const [localAudioState, setLocalAudioState] = useState<string>(localStorage.getItem('bk_useSound') as string);
  const handleAudioSwitcherOnClick = async () => {
    await window.location.reload();

    if (localAudioState === 'true') {
      setLocalAudioState('false');
      return localStorage.setItem('bk_useSound', 'false');
    }
    setLocalAudioState('true');
    return localStorage.setItem('bk_useSound', 'true');
  };

  const tooltipText = localAudioState === 'true' ? t('mute_audio') : t('unmute_audio');

  return (
    <div className="tooltip-primary my-auto flex h-8 w-8 lg:tooltip lg:tooltip-bottom" data-tip={tooltipText}>
      <KrausSfxButton
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAudioSwitcherOnClick}
        hoverSfxPath={SfxPath.buttonHoveSfx}
        name="Audio Switch Button"
        aria-label="Audio Switch Button"
      >
        {localAudioState === 'true' ? <AudioMuteIcon /> : <AudioIcon />}
      </KrausSfxButton>
    </div>
  );
};

export default KrausAudioSwitcher;
