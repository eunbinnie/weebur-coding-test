'use client';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getProducts } from '@/lib/api/products';
import { cn } from '@/lib/utils';

import type { ProductView } from '@/types/products.types';

import {
  gridClassName,
  listClassName,
  PRODUCTS_PER_PAGE,
  PRODUCTS_SELECT,
} from '../_constants/products';

import ProductListItem from './ProductListItem';
import ProductSkeletonItem from './ProductSkeletonItem';

interface IProductList {
  view: ProductView;
}

/**
 * 상품 목록을 렌더링하는 컴포넌트입니다.
 *
 * 상품 리스트 데이터를 불러와 리스트 또는 그리드 형태로 렌더링합니다.
 */
const ProductList = ({ view }: IProductList) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
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
        <div
          ref={observer}
          className={cn(
            'mt-8 min-h-[200px]',
            view === 'list' ? listClassName : gridClassName,
          )}
        >
          {isFetchingNextPage &&
            Array.from({ length: PRODUCTS_PER_PAGE }).map((_, i) => (
              <ProductSkeletonItem key={i} view={view} />
            ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
