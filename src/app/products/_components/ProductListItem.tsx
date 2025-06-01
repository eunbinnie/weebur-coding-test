import { MessageSquare, Star } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { roundToFixedFirst } from '@/lib/utils/number';

import type { Product } from '@/types/products.types';

interface IProductListItem {
  item: Product;
  view: 'list' | 'grid';
}

/**
 * 개별 상품 아이템을 렌더링하는 컴포넌트입니다.
 *
 * 리스트 또는 그리드 형태로 아이템을 다르게 보여줍니다.
 *
 * @param item 상품 정보 객체
 * @param view 상품 아이템 뷰 타입 (list 또는 grid)
 */
const ProductListItem = ({ item, view }: IProductListItem) => {
  const imageContainerClass =
    view === 'list' ? 'aspect-square size-20' : 'aspect-video w-full';
  const imageClass = view === 'list' ? 'object-cover' : 'object-contain';

  return (
    <div className='group rounded-md px-3 py-4 shadow-custom-shadow'>
      <div
        className={cn(
          'flex justify-between gap-6',
          view === 'grid' && 'flex-col-reverse',
        )}
      >
        <div className='grid flex-1 gap-2 lg:gap-4'>
          <h2 className='line-clamp-1 text-lg font-bold'>{item.title}</h2>
          <p className='line-clamp-2 text-sm'>{item.description}</p>
        </div>
        <div className={cn('relative overflow-hidden', imageContainerClass)}>
          <Image
            src={item.thumbnail}
            alt={`${item.title} 상품 썸네일`}
            fill
            priority
            sizes='100%'
            className={cn(
              'transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-110',
              imageClass,
            )}
          />
        </div>
      </div>
      <div className='mt-4 flex items-center gap-3'>
        <div className='flex items-center gap-1'>
          <Star size={14} color='#ffbf00' fill='#ffbf00' />
          <span className='text-xs'>{roundToFixedFirst(item.rating)}</span>
        </div>
        <div className='flex items-center gap-1'>
          <MessageSquare size={14} color='#94969b' />
          <span className='text-xs'>{item.reviews.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
