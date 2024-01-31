import { useSnapshot } from 'valtio';
import { store } from '@/store/store';

// try to retrieve state

const storeState: { [key: string]: any } = [];

export const useStore = (state: keyof typeof store) => {
  const snap = useSnapshot(store);

  return { [state]: snap[state] };
};
