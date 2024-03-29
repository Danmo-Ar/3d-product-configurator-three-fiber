'use client';
import { CameraProps, Canvas } from '@react-three/fiber';
import { TShirt } from './mesh/t-shirt';
import { Center, Environment, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Backdrop } from './backdrop';
import { Camera } from './camera';

interface SceneProps extends CameraProps {
  fov: number;
}

export const Scene = ({ position = [0, 0, 2.5], fov = 25 }: SceneProps) => {
  const SceneRef = useRef<HTMLCanvasElement>(null);
  return (
    <Canvas
      ref={SceneRef}
      // Reference of the scene for easly take screenshot
      eventSource={SceneRef.current!}
      eventPrefix="client"
      camera={{ position, fov }}
      // Active Sahdow
      shadows
      // to take the current state of the scene and download it as texture
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Add Ambient Ligthing */}
      <ambientLight />
      {/* Add Environement to have atmosphere light */}
      <Environment preset="city" />
      <Camera>
        <Center>
          <TShirt />
          <Backdrop />
        </Center>
      </Camera>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};
