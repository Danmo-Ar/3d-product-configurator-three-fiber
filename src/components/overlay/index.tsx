'use client';
import React from 'react';

import { ShowCase } from './showcase';
import { Customize } from './customize';
import { useStore } from '@/hooks/useStore';
import { AnimatePresence } from 'framer-motion';

const Overlay = () => {
  const { isShowcase } = useStore('isShowcase');
  return (
    <AnimatePresence>
      {isShowcase ? (
        <ShowCase key="showcase" />
      ) : (
        <Customize key="customization" />
      )}
    </AnimatePresence>
  );
};

export default Overlay;
