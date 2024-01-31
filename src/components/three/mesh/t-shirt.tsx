import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { usePosition } from '@/hooks/usePosition';

import { useStore } from '@/hooks/useStore';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
//gltf.pmnd.rs/ : visualise glb be file and optimize  to get the code inside Tshirt

export const TShirt = ({ props }: any) => {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
  const Shirt = useRef<Group>(null);
  const { color } = useStore('color');

  const materialColor = new THREE.Color(color as string);

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
      />
    </group>
  );
};

useGLTF.preload('/shirt_baked_collapsed.glb');
