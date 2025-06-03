import type { Control, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { AddProductInput } from '@/schemas/product.schema';

import InputWrapper from '@/components/InputWrapper';
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

interface BrandSelectProps {
  errors: FieldErrors<AddProductInput>;
  control: Control<AddProductInput>;
}

const BrandSelect = ({ errors, control }: BrandSelectProps) => {
  return (
    <InputWrapper
      label='브랜드'
      htmlFor='brand'
      error={!!errors.brand}
      errorMessage={errors.brand?.message}
      required
    >
      <Controller
        control={control}
        name='brand'
        render={({ field }) => (
          <Select value={field.value ?? ''} onValueChange={field.onChange}>
            <SelectTrigger className='border-gray-500 py-1 leading-[1.6] text-black outline-none placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-gray-300'>
              <SelectValue placeholder='브랜드를 선택해 주세요' />
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
        )}
      />
    </InputWrapper>
  );
};

export default BrandSelect;
