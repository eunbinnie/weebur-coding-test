import { cn } from '@/lib/utils';

const ProductSkeletonItem = () => {
  return (
    <div className='w-full px-3 py-4'>
      <div className='flex justify-between gap-6'>
        <div className='grid flex-1 gap-2 lg:gap-4'>
          <div className='h-5 max-w-32 animate-pulse rounded-sm bg-gray-200 py-1' />
          <div className='h-7 w-full animate-pulse rounded-sm bg-gray-200' />
        </div>
        <div
          className={cn(
            'aspect-square size-20',
            'animate-pulse rounded-sm bg-gray-200',
          )}
        />
      </div>
    </div>
  );
};

export default ProductSkeletonItem;
