'use client';
import { CameraProps, Canvas } from '@react-three/fiber';
import { TShirt } from './mesh/t-shirt';
import { OrbitControls, Center, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { Backdrop } from './backdrop';

interface SceneProps extends CameraProps {
  fov: number;
}

export const Scene = ({ position = [-1, 0, 2.5], fov = 25 }: SceneProps) => {
  const SceneRef = useRef<HTMLCanvasElement>(null);
  return (
    <Canvas
      ref={SceneRef}
      // Reference of the scene for easly take screenshot
      id="scene"
      eventSource={SceneRef.current!}
      eventPrefix="client"
      camera={{ position, fov }}
      // Active Sahdow
      shadows
    >
      {/* Add Ambient Ligthing */}
      <ambientLight intensity={0.7} />
      {/* Add Environement to have atmosphere light */}
      <Environment preset="city" />
      <Center>
        <TShirt />
        <Backdrop />
      </Center>
      <OrbitControls />
    </Canvas>
  );
};
