'use client';
import { CameraProps, Canvas } from '@react-three/fiber';
import { TShirt } from './mesh/t-shirt';
import { OrbitControls, Center } from '@react-three/drei';
import { useRef } from 'react';

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
    >
      <Center>
        <TShirt />
      </Center>
      <OrbitControls />
    </Canvas>
  );
};
