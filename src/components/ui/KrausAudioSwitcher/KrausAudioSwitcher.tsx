'use client';

import React, { FC } from 'react';
import { RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import { useLocalStorage } from 'react-use';

import KrausSfxButton from '../KrausSfxComponents/KrausSfxButton/KrausSfxButton';

const KrausAudioSwitcher: FC = () => {
  const [localAudioState, setLocalAudioState] = useLocalStorage<boolean>('bk_useSound');

  const handleAudioSwitcherOnClick = async () => {
    // await window.location.reload();

    if (localAudioState === true) {
      return setLocalAudioState(false);
    }
    return setLocalAudioState(true);
  };

  return (
    <div className="my-auto flex">
      <KrausSfxButton
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAudioSwitcherOnClick}
        name="Audio Switch Button"
        aria-label="Audio Switch Button"
      >
        {localAudioState === true ? <RxSpeakerOff size={17} /> : <RxSpeakerLoud size={17} />}
      </KrausSfxButton>
    </div>
  );
};

export default KrausAudioSwitcher;
