'use client';

import { getProducts } from '@/lib/api/products';
import { useQuery } from '@tanstack/react-query';
import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from '../_constants/products';
import ProductListItem from './ProductListItem';

/**
 * 상품 목록을 렌더링하는 컴포넌트입니다.
 *
 * @TODO infinite scroll 구현 필요
 * @TODO list, grid로 view 표시 필요
 */
const ProductList = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip: 0,
        select: PRODUCTS_SELECT,
      }),
  });

  const listClassName = '[&>*:not(:first-child)]:mt-5'; // 리스트형 클래스네임

  return (
    <section className='mt-[60px]'>
      {data?.products.map((item) => (
        <ProductListItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductList;
