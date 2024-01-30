import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
//gltf.pmnd.rs/ : visualise glb be file and optimize  to get the code inside Tshirt

export const TShirt = ({ props }: any) => {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb');
  return (
    <group {...props} dispose={null}>
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
