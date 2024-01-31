import { useMutateStore } from '@/hooks/useMutateStore';
import { store } from '@/store/store';

export const ShowCase = () => {
  // let { isShowcaseMutate } = useMutateStore('isShowcase');
  return (
    <div className="container flex flex-col gap-[5rem] absolute z-10 top-0 left-5 w-full h-full pointer-events-none">
      <header className="mt-3 flex justify-beetwen">
        <h1>Ariel ThreejS</h1>
      </header>
      <main>
        <h1 className="text-[11vw] text-[#3A1B1B] w-[60%] leading-[1] font-black uppercase mb-[30px]">
          MY 3D PRODUCT
        </h1>
        <p className="text-[2vw]  font-medium">
          React Three Fiber is Amazing
        </p>
      </main>
      <div className="text-center mt-[100px]">
        <button
          className="rounded-md pointer-events-auto py-[12px] px-[20px] bg-[#3A1B1B] text-white w-[200px]"
          onClick={() => (store.isShowcase = false)}
        >
          Customize
        </button>
      </div>
    </div>
  );
};
