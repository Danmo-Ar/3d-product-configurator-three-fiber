import React, { useEffect, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { Group } from 'three';
import { usePosition } from '@/hooks/usePosition';

import { useStore } from '@/hooks/useStore';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Decal } from '@react-three/drei';
//gltf.pmnd.rs/ : visualise glb be file and optimize  to get the code inside Tshirt

export const TShirt = ({ props }: any) => {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
  const Shirt = useRef<Group>(null);
  const { color } = useStore('color');
  const { logo } = useStore('logo');

  const materialColor = new THREE.Color(color as string);
  const texture = useTexture(`/logo/${logo}-logo.png`);

  useFrame((_, delta) => {
    // @ts-ignore

    easing.dampC(materials.lambert1.color, materialColor, 0.2, delta);
  });

  return (
    <group ref={Shirt} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
      >
        <Decal
          position={[0, -0.01, 0.1]}
          rotation={[0, 0, 0]}
          map={texture}
          opacity={0.8}
          scale={0.2}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/shirt_baked_collapsed.glb');
[
  '/logo/konoha-logo.png',
  '/logo/naruto-logo.png',
  '/logo/uchiwa-logo.png',
].forEach(useTexture.preload);
