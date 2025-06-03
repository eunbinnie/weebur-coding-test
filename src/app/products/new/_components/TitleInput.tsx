import type { ProductInputProps } from '@/types/products.types';

import Input from '@/components/Input';
import InputWrapper from '@/components/InputWrapper';

const TitleInput = ({ errors, register }: ProductInputProps) => {
  return (
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
  );
};

export default TitleInput;
