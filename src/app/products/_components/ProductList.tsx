'use client';

import { getProducts } from '@/lib/api/products';
import { useQuery } from '@tanstack/react-query';
import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from '../_constants/products';
import ProductListItem from './ProductListItem';
import { cn } from '@/lib/utils/classnames';
import { ProductView } from '@/types/products.types';

interface IProductList {
  view: ProductView;
}

/**
 * 상품 목록을 렌더링하는 컴포넌트입니다.
 *
 * 상품 리스트 데이터를 불러와 리스트 또는 그리드 형태로 렌더링합니다.
 *
 * @TODO infinite scroll 기능 구현현
 * @TODO list, grid로 view 전환 기능 구현 (24시간 유지)
 */
const ProductList = ({ view }: IProductList) => {
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
  const gridClassName =
    'grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'; // 그리드형 클래스네임

  return (
    <section
      className={cn(
        'mt-[60px]',
        view === 'list' ? listClassName : gridClassName,
      )}
    >
      {data?.products.map((item) => (
        <ProductListItem key={item.id} item={item} view={view} />
      ))}
    </section>
  );
};

export default ProductList;
