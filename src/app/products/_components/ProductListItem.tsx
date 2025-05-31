import { Product } from '@/types/products.types';
import { MessageSquare, Star } from 'lucide-react';
import Image from 'next/image';

interface IProductListItem {
  item: Product;
}

/**
 * 상품 아이템 컴포넌트입니다.
 *
 * @param item 상품 아이템 정보
 */
const ProductListItem = ({ item }: IProductListItem) => {
  return (
    <div key={item.id} className='shadow-custom-shadow rounded-md px-3 py-4'>
      <div className='flex justify-between gap-6'>
        <div className='grid flex-1 gap-2 lg:gap-4'>
          <h2 className='line-clamp-1 text-lg font-bold'>{item.title}</h2>
          <p className='line-clamp-2 text-sm'>{item.description}</p>
        </div>
        <div className='relative aspect-square size-20'>
          <Image
            src={item.thumbnail}
            alt={`${item.title} 이미지`}
            fill
            sizes='100%'
            className='object-cover'
          />
        </div>
      </div>
      <div className='mt-4 flex items-center gap-3'>
        <div className='flex items-center gap-1'>
          <Star size={14} color='#ffbf00' fill='#ffbf00' />
          <span className='text-xs'>{item.rating}</span>
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
