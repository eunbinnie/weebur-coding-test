import type { ProductInputProps } from '@/types/products.types';

import InputWrapper from '@/components/InputWrapper';
import Textarea from '@/components/Textarea';

const DescriptionTextarea = ({ errors, register }: ProductInputProps) => {
  return (
    <InputWrapper
      label='상품 설명'
      htmlFor='description'
      error={!!errors.description}
      errorMessage={errors.description?.message}
    >
      <Textarea
        id='description'
        placeholder='상품에 대한 설명을 입력하세요'
        {...register('description')}
      />
    </InputWrapper>
  );
};

export default DescriptionTextarea;
