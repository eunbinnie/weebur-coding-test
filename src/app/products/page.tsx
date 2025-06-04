import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { cookies } from 'next/headers';

import { getProducts } from '@/lib/api/products';

import type { ProductView } from '@/types/products.types';

import ProductList from './_components/ProductList';
import ProductListHeader from './_components/ProductListHeader';
import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from './_constants/products';

const ProductsPage = async () => {
  const queryClient = new QueryClient();
  const cookieStore = await cookies();
  const view = cookieStore.get('view')?.value as ProductView;

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['products'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip: pageParam,
        select: PRODUCTS_SELECT,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListHeader />
      <ProductList view={view} />
    </HydrationBoundary>
  );
};

export default ProductsPage;
