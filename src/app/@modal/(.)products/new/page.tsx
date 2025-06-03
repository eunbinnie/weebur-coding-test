'use client';

import NewProductForm from '@/app/products/new/_components/NewProductForm';
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const NewProductPage = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className='w-[calc(100%-24px)] rounded-lg sm:max-w-[400px]'>
        <DialogHeader>
          <DialogTitle>새 상품 등록</DialogTitle>
          <DialogDescription className='text-xs sm:text-sm'>
            모든 필드를 입력한 후 등록 버튼을 눌러 상품을 추가하세요.
          </DialogDescription>
        </DialogHeader>
        <NewProductForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewProductPage;
