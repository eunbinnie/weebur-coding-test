'use client';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LoaderCircle } from 'lucide-react';

import { getProducts } from '@/lib/api/products';
import { cn } from '@/lib/utils';

import type { ProductView } from '@/types/products.types';

import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from '../_constants/products';

import ProductListItem from './ProductListItem';

interface IProductList {
  view: ProductView;
}

/**
 * 상품 목록을 렌더링하는 컴포넌트입니다.
 *
 * 상품 리스트 데이터를 불러와 리스트 또는 그리드 형태로 렌더링합니다.
 */
const ProductList = ({ view }: IProductList) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 0 }) =>
      getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip: pageParam,
        select: PRODUCTS_SELECT,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (
        lastPage.total === lastPage.products[lastPage.products.length - 1].id
      ) {
        return undefined;
      }

      return lastPage.skip + PRODUCTS_PER_PAGE;
    },
  });

  const observer = useInfiniteScroll({ fetchNextPage, hasNextPage });

  const listClassName = '[&>*:not(:first-child)]:mt-5'; // 리스트형 클래스네임
  const gridClassName =
    'grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'; // 그리드형 클래스네임

  return (
    <>
      <section
        className={cn('mt-8', view === 'list' ? listClassName : gridClassName)}
      >
        {data?.pages.map((page) =>
          page.products.map((item) => (
            <ProductListItem key={item.id} item={item} view={view} />
          )),
        )}
      </section>
      {hasNextPage && (
        <div ref={observer} className='my-20'>
          <LoaderCircle className='mx-auto animate-spin' />
        </div>
      )}
    </>
  );
};

export default ProductList;
