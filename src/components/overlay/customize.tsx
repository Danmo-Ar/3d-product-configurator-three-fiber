import { COLORS, LOGOS } from '@/contants/custumize';
import { useStore } from '@/hooks/useStore';
import { store } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';

export const Customize = () => {
  const { color } = useStore('color');

  return (
    <section
      key="custom"
      className="absolute flex justify-center z-10 bottom-[30px] w-full h-full pointer-events-none"
    >
      <Link href=""></Link>
      <header className="absolute top-[40px] w-full flex justify-between items-center px-[4rem] pointer-events-auto">
        <span
          role="button"
          className="underline cursor-pointer text-[#3A1B1B] font-medium underline-offset-2 "
          onClick={() => {
            store.isShowcase = true;
            store.color = '#ffffff';
          }}
        >
          Close
        </span>
        <button
          style={{ backgroundColor: (color as any) || '#3A1B1B' }}
          className="rounded-md pointer-events-auto py-[12px] px-[3vw]  text-white w-[200px]"
        >
          ScreenShot
        </button>
      </header>
      {/* colors options  */}
      <div className="absolute bottom-[30px] flex gap-3 pointer-events-auto">
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
      </div>

      {/* Logo : decals */}
      <div className="absolute left-[50%] translate-x-[-50%] flex gap-[1rem] top-[20%]  pointer-events-auto ">
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
      </div>
    </section>
  );
};
