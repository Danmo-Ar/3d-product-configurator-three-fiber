// To fix black color appear on Mesh beacuse of backing light.

// create a planner that accumalte shadow as background for element.
// we have to add fake light to our compponents to get it work
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

export const Backdrop = () => {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
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
        position={[-5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};
