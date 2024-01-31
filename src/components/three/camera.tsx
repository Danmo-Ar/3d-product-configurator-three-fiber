import { useFrame } from '@react-three/fiber';
import { PropsWithChildren, useRef } from 'react';
import { Group } from 'three';
import { easing } from 'maath';

export const Camera = ({ children }: PropsWithChildren) => {
  const MainScene = useRef<Group>(null);

  //   BASICS Animation
  //   https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
  //   Maath module install
  //   https://github.com/pmndrs/maath easing section

  useFrame((state, delta) => {
    // Make the T-shirt Follow the mouse position
    easing.dampE(
      MainScene.current?.rotation!,
      [state.pointer.y / 7, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={MainScene}>{children}</group>;
};
