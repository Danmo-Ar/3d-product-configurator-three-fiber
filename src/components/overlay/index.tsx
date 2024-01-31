'use client';
import React from 'react';

import { ShowCase } from './showcase';
import { Customize } from './customize';
import { useStore } from '@/hooks/useStore';

const Overlay = () => {
  const { isShowcase } = useStore('isShowcase');
  return <>{isShowcase ? <ShowCase /> : <Customize />}</>;
};

export default Overlay;
