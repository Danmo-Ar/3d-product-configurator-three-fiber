import Overlay from '@/components/overlay';
import { Scene } from '@/components/three/scene';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Scene />
      <Overlay />
    </>
  );
}
