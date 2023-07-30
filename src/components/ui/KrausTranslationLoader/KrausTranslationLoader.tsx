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
    <div className="w-full">
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box h-full max-w-full bg-transparent shadow-none">
          <Canvas>
            <EarthModel scale={earthModelScale} position={[earthModelPositionX, 0, 0]} />
            <Environment preset="sunset" />
          </Canvas>
        </form>
      </dialog>
    </div>
  );
};

export default KrausTranslationLoader;
