import Overlay from '@/components/overlay';
import { Scene } from '@/components/three/scene';

export default function Home() {
  return (
    <>
      {/* @ts-ignore */}
      <Scene />
      <Overlay />
    </>
  );
}
