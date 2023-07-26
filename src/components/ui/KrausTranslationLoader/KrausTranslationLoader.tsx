import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { FC } from 'react';

import EarthModel from './EarthModel';

interface KrausTranslationLoaderProps {}

const KrausTranslationLoader: FC<KrausTranslationLoaderProps> = () => {
  return (
    <div className="w-full">
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box h-full max-w-full bg-transparent shadow-none">
          <Canvas>
            <EarthModel scale={2.5} position={[1, 0, 0]} />
            <Environment preset="sunset" />
          </Canvas>
        </form>
      </dialog>
    </div>
  );
};

export default KrausTranslationLoader;
