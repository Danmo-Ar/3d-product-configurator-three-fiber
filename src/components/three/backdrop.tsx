// To fix black color appear on Mesh beacuse of backing light.

// create a planner that accumalte shadow as background for element.
// we have to add fake light to our compponents to get it work
import { useStore } from '@/hooks/useStore';
import {
  AccumulativeShadows,
  AccumulativeShadowsProps,
  RandomizedLight,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';

import * as THREE from 'three';

export const Backdrop = () => {
  const Backdrop = useRef<any>(null);

  const { color } = useStore('color');

  const materialColor = new THREE.Color(color as string);

  useFrame((_, delta) => {
    // @ts-ignore

    easing.dampC(
      Backdrop.current?.getMesh().material.color,
      materialColor,
      0.1,
      delta
    );
  });

  return (
    <AccumulativeShadows
      ref={Backdrop}
      temporal
      frames={25}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.7}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.7}
        ambient={0.25}
        position={[6, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.7}
        ambient={0.25}
        position={[-5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};
