import { store } from '@/store/store';

export const useMutateStore = (state: keyof typeof store) => {
  const returnName = `${state}Mutate`;
  return { [returnName]: store[state] };
};
