import { proxy } from 'valtio';

type ShowCase = boolean;

type Color = `#${string}` | '';

export const store = proxy<{ isShowcase: ShowCase; color: Color }>({
  isShowcase: true,
  color: '#fffff',
});
