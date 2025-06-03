import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { AddProductRequestBody } from '@/types/products.types';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputWrapper from '@/components/InputWrapper';
import Textarea from '@/components/Textarea';

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
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
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
      {/* 상품 설명 */}
      <InputWrapper
        label='상품 설명'
        htmlFor='description'
        required
        error={!!errors.description}
        errorMessage={errors.description?.message}
      >
        <Textarea
          id='description'
          placeholder='상품 설명을 입력하세요'
          {...register('description')}
        />
      </InputWrapper>
      <Button type='submit'>등록하기</Button>
    </form>
  );
};

export default NewProductForm;
