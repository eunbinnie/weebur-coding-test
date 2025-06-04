import { cn } from '@/lib/utils';

import type { ProductView } from '@/types/products.types';

interface IProductSkeletonItem {
  view: ProductView;
}

const ProductSkeletonItem = ({ view }: IProductSkeletonItem) => {
  return (
    <div className='w-full px-3 py-4'>
      <div
        className={cn(
          'flex justify-between gap-6',
          view === 'grid' && 'flex-col-reverse',
        )}
      >
        <div className='grid flex-1 gap-2 lg:gap-4'>
          <div className='h-5 max-w-32 animate-pulse rounded-sm bg-gray-200 py-1' />
          <div className='h-7 w-full animate-pulse rounded-sm bg-gray-200' />
        </div>
        <div
          className={cn(
            view === 'list' ? 'aspect-square size-20' : 'aspect-video w-full',
            'animate-pulse rounded-sm bg-gray-200',
          )}
        />
      </div>
    </div>
  );
};

export default ProductSkeletonItem;
