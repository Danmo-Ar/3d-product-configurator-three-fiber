import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { usePosition } from '@/hooks/usePosition';
//gltf.pmnd.rs/ : visualise glb be file and optimize  to get the code inside Tshirt

export const TShirt = ({ props }: any) => {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
  const Shirt = useRef<Group>(null);

  return (
    <group ref={Shirt} {...props} dispose={null} position={[0.5, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

useGLTF.preload('/shirt_baked_collapsed.glb');
