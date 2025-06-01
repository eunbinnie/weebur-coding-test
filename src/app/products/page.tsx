import { getProducts } from '@/lib/api/products';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ProductList from './_components/ProductList';
import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from './_constants/products';
import { cookies } from 'next/headers';
import { ProductView } from '@/types/products.types';
import ProductListHeader from './_components/ProductListHeader';

const ProductsPage = async () => {
  const queryClient = new QueryClient();
  const cookieStore = await cookies();
  const view = cookieStore.get('view')?.value as ProductView;

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () =>
      getProducts({
        limit: PRODUCTS_PER_PAGE,
        skip: 0,
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
