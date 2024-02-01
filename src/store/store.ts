import { proxy } from 'valtio';

type ShowCase = boolean;

type Color = `#${string}` | '';

export const store = proxy<{
  isShowcase: ShowCase;
  color: Color;
  logo: string;
}>({
  isShowcase: true,
  color: '#ffffff',
  logo: 'naruto',
});
