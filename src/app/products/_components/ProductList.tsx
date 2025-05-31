'use client';

import { getProducts } from '@/lib/api/products';
import { useQuery } from '@tanstack/react-query';
import { PRODUCTS_PER_PAGE, PRODUCTS_SELECT } from '../_constants/products';

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

  console.log(data);

  return <div>Products List</div>;
};

export default ProductList;
