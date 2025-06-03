import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { AddProductRequestBody } from '@/types/products.types';

import Button from '@/components/Button';
import Input from '@/components/Input';
import InputWrapper from '@/components/InputWrapper';
import Textarea from '@/components/Textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { BRANDS } from '../../_constants/products';

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
        error={!!errors.description}
        errorMessage={errors.description?.message}
      >
        <Textarea
          id='description'
          placeholder='상품에 대한 설명을 입력하세요'
          {...register('description')}
        />
      </InputWrapper>
      {/* 상품 가격 */}
      <InputWrapper
        label='상품 가격'
        htmlFor='price'
        required
        error={!!errors.price}
        errorMessage={errors.price?.message}
        unit='원'
      >
        <Input
          id='price'
          placeholder='가격을 입력하세요'
          {...register('price')}
        />
      </InputWrapper>
      {/* 할인율 */}
      <InputWrapper
        label='할인율'
        htmlFor='discountPercentage'
        error={!!errors.discountPercentage}
        errorMessage={errors.discountPercentage?.message}
        unit='%'
      >
        <Input
          id='discountPercentage'
          placeholder='할인율을 입력하세요'
          {...register('discountPercentage')}
        />
      </InputWrapper>
      {/* 브랜드 */}
      <InputWrapper
        label='브랜드'
        htmlFor='brand'
        error={!!errors.brand}
        errorMessage={errors.brand?.message}
        required
      >
        <Select {...register('brand')}>
          <SelectTrigger className='border-gray-500 py-1 leading-[1.6] text-black outline-none placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-gray-300'>
            <SelectValue placeholder='브랜드를 선택하세요' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className='text-xs font-medium text-gray-500'>
                브랜드
              </SelectLabel>
              {BRANDS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </InputWrapper>
      <div className='flex pt-5'>
        <Button type='submit' className='ml-auto'>
          등록하기
        </Button>
      </div>
    </form>
  );
};

export default NewProductForm;
