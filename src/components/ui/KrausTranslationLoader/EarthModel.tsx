import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';

export default function EarthModel(props: any) {
  const { scene } = useGLTF('Models/lowpolyEarth.glb');

  useFrame((_state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
}
