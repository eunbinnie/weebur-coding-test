import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { AddProductRequestBody } from '@/types/products.types';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputWrapper from '@/components/InputWrapper';

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductRequestBody>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<AddProductRequestBody> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 상품명 */}
      <InputWrapper
        label='상품명'
        htmlFor='title'
        required
        error={!!errors.title}
        errorMessage={errors.title?.message}
      >
        <Input
          id='title'
          placeholder='상품명을 입력하세요'
          {...register('title')}
        />
      </InputWrapper>
      <Button type='submit' className='mt-5'>
        등록하기
      </Button>
    </form>
  );
};

export default NewProductForm;
