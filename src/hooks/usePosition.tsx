import { Vector3 } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export const usePosition = (positions: any) => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    setCoords({
      x: positions?.x,
      y: positions?.y,
      z: positions?.z,
    });
  }, []);
  return [coords.x, coords.y, coords.z];
};
