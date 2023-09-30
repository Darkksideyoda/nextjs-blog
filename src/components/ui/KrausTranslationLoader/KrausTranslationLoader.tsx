'use client';

import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { FC, useEffect, useState } from 'react';

import EarthModel from './EarthModel';

interface KrausTranslationLoaderProps {}

const KrausTranslationLoader: FC<KrausTranslationLoaderProps> = () => {
  const [earthModelPositionX, setEarthModelPositionX] = useState<number>(0.6);
  const [earthModelScale, setEarthModelScale] = useState<number>(2);

  useEffect(() => {
    if (window.innerWidth > 1700) {
      setEarthModelPositionX(0.7);
      setEarthModelScale(2.5);
    }
  }, []);

  return (
    <Canvas>
      <EarthModel scale={earthModelScale} position={[earthModelPositionX, 0, 0]} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default KrausTranslationLoader;
