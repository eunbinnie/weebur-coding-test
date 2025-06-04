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

export const listClassName = '[&>*:not(:first-child)]:mt-5'; // 리스트형 클래스네임
export const gridClassName =
  'grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'; // 그리드형 클래스네임
