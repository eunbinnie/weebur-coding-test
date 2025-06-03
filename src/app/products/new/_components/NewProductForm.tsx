'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { AddProductInput } from '@/schemas/product.schema';
import { addProductSchema } from '@/schemas/product.schema';
import { zodResolver } from '@hookform/resolvers/zod';

import { formatNumberWithCommas } from '@/lib/utils/number';

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

import DescriptionTextarea from './DescriptionTextarea';
import NumberInput from './NumberInput';
import TitleInput from './TitleInput';

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<AddProductInput>({
    mode: 'onChange',
    resolver: zodResolver(addProductSchema),
  });

  const price = watch('price') || 0; // 상품 가격
  const discountPercentage = watch('discountPercentage') || 0; // 할인율

  const finalPrice = price - (price * (discountPercentage || 0)) / 100; // 할인 적용된 최종 가격

  const onSubmit: SubmitHandler<AddProductInput> = (data) => {
    const formData = { ...data };
    // description 필드가 비어있으면 제거
    if (!formData.description || formData.description.trim() === '') {
      delete formData.description;
    }
    // discountPercentage 필드가 0이면 제거
    if (!formData.discountPercentage || formData.discountPercentage === 0) {
      delete formData.discountPercentage;
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
      <TitleInput errors={errors} register={register} />
      <DescriptionTextarea errors={errors} register={register} />
      <NumberInput
        required
        errors={errors}
        register={register}
        title='price'
        label='상품 가격'
        placeholder='가격을 입력해 주세요'
        unit='원'
      />
      <NumberInput
        errors={errors}
        register={register}
        title='discountPercentage'
        label='할인율'
        placeholder='할인율을 입력해 주세요'
        unit='%'
      />

      {/* 브랜드 */}
      {/* <InputWrapper
        label='브랜드'
        htmlFor='brand'
        error={!!errors.brand}
        errorMessage={errors.brand?.message}
        required
      >
        <Select>
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
      </InputWrapper> */}
      <div className='flex items-center justify-between pt-5'>
        <p className='text-sm'>
          최종 가격:{' '}
          <span className='font-bold'>
            {formatNumberWithCommas(finalPrice.toString())}
          </span>
          원
        </p>
        <Button type='submit' disabled={!isValid} className='ml-auto'>
          등록하기
        </Button>
      </div>
    </form>
  );
};

export default NewProductForm;
