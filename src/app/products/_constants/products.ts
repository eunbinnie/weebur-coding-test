import type { Brand } from '@/types/products.types';

export const PRODUCTS_PER_PAGE = 20;

export const PRODUCTS_SELECT =
  'title,description,thumbnail,rating,reviews,category';

export const BRANDS: { value: Brand; label: Brand }[] = [
  {
    value: 'Apple',
    label: 'Apple',
  },
  {
    value: 'Samsung',
    label: 'Samsung',
  },
  {
    value: 'Weebur',
    label: 'Weebur',
  },
];
