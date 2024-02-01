import { COLORS, LOGOS } from '@/contants/custumize';
import { useStore } from '@/hooks/useStore';
import { store } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { Transition, motion } from 'framer-motion';

export const Customize = () => {
  const { color } = useStore('color');

  const transitions: Transition = { duration: 0.5, type: 'spring' };

  return (
    <section
      key="custom"
      className="absolute flex justify-center z-10 bottom-[30px] w-full h-full pointer-events-none"
    >
      <Link href=""></Link>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { ...transitions } }}
        exit={{ y: -120, opacity: 0, transition: { ...transitions } }}
        className="absolute top-[40px] w-full flex justify-between items-center px-[4rem] pointer-events-auto"
      >
        <span
          role="button"
          className="underline cursor-pointer text-[#3A1B1B] font-medium underline-offset-2 text-[2rem] "
          onClick={() => {
            store.isShowcase = true;
            store.color = '#ffffff';
          }}
        >
          Close
        </span>
        <button
          style={{
            backgroundColor:
              (color as any) === '#ffffff' ? '#3A1B1B' : (color as any),
          }}
          className="rounded-md pointer-events-auto py-[12px] px-[3vw] text-[2rem]  text-white w-[200px]"
          onClick={() => {
            const link = document.createElement('a');
            link.setAttribute('download', 'product.png');
            link.setAttribute(
              'href',
              document
                .querySelector('canvas')
                ?.toDataURL('image/ png')
                .replace('image/png', 'image/octet—stream')!
            );
            link.click();
          }}
        >
          ScreenShot
        </button>
      </motion.header>
      {/* colors options  */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { ...transitions, duration: 0.7, delay: 0.2 },
        }}
        exit={{ y: 20, opacity: 0, transition: { ...transitions } }}
        className="absolute bottom-[30px] flex gap-3 pointer-events-auto"
      >
        {COLORS.map(color => {
          return (
            <div
              role="button"
              key={color}
              className="circle w-[40px] h-[40px] rounded-full cursor-pointer border-white border-2"
              style={{ backgroundColor: color }}
              onClick={() => (store.color = color as `#${string}`)}
            ></div>
          );
        })}
      </motion.div>

      {/* Logo : decals */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { ...transitions, duration: 0.7, delay: 0.4 },
        }}
        exit={{ y: -20, opacity: 0, transition: { ...transitions } }}
        className="absolute left-[50%] !translate-x-[-50%] flex gap-[1rem] top-[20%]  pointer-events-auto "
      >
        {LOGOS.map(logo => {
          return (
            <div
              key={logo}
              className="w-[40px] h-[40px] rounded-full circle cursor-pointer"
              onClick={() => (store.logo = logo)}
            >
              <Image
                src={`/logo/${logo}-logo.png`}
                alt="customize shirt logo"
                width={40}
                height={40}
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
