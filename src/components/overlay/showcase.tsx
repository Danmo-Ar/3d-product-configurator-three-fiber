import { useMutateStore } from '@/hooks/useMutateStore';
import { store } from '@/store/store';
import { Variants, motion } from 'framer-motion';

export const ShowCase = () => {
  // let { isShowcaseMutate } = useMutateStore('isShowcase');

  const mainVariants: Variants = {
    initial: {
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.3,
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        type: 'spring',
        bounce: 0,
        staggerChildren: 0.4,
      },
    },
  };

  const mainItemsVariants: Variants = {
    initial: {
      opacity: 0,
      y: '20%',
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
    exit: {
      opacity: 0,
      y: '20%',
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
  };

  // const config = {
  //   exit: {
  //     opacity: 0,
  //     y: '-20%',
  //     transition: {
  //       type: 'spring',
  //       bounce: 0,
  //     },
  //   },
  // };

  return (
    <div className="container flex flex-col gap-[5rem] absolute z-10 !top-[10%]  pl-[2rem] w-full h-full pointer-events-none">
      <motion.main
        variants={mainVariants}
        initial="initial"
        animate={'animate'}
        exit={'exit'}
        className="mt-10"
      >
        <motion.h1
          variants={mainItemsVariants}
          className="sm:text-[16rem] xl:text-[20rem] text-[8rem] text-[#3A1B1B]  w-[60%] leading-[1] font-black uppercase mb-[30px]"
        >
          MY 3D PRODUCT
        </motion.h1>
        <motion.p
          variants={mainItemsVariants}
          className="text-[3rem]  font-light"
        >
          React Three Fiber is Amazing
        </motion.p>
        <motion.div variants={mainItemsVariants} className=" mt-[40px]">
          <button
            className="rounded-md pointer-events-auto py-[12px] text-[2rem]  px-[20px] bg-[#3A1B1B] text-white w-[200px]"
            onClick={() => (store.isShowcase = false)}
          >
            Customize
          </button>
        </motion.div>
      </motion.main>
    </div>
  );
};
