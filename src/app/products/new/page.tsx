'use client';

import { CircleChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import NewProductForm from './_components/NewProductForm';

const NewProductPage = () => {
  const router = useRouter();

  return (
    <div className='mx-auto max-w-[400px]'>
      <button
        type='button'
        onClick={() => router.back()}
        className='mb-4 flex items-center gap-1'
      >
        <CircleChevronLeft color='#4b5563' />
      </button>
      <NewProductForm />
    </div>
  );
};

export default NewProductPage;
