'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

const ProductListHeader = () => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between gap-5'>
      {/* TODO 필터 및 검색 추가 */}
      <div></div>
      <Button onClick={() => router.push('/products/new')}>
        상품 등록하기
      </Button>
    </div>
  );
};

export default ProductListHeader;
