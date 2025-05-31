import { getProducts } from '@/lib/api/products';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ProductList from './_components/ProductList';
import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from './_constants/products';

const ProductsPage = async () => {
  const queryClient = new QueryClient();

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
      <ProductList />
    </HydrationBoundary>
  );
};

export default ProductsPage;
