'use client';

import { useState } from 'react';

import type { AddProductInput } from '@/schemas/product.schema';

import { formatNumberWithCommas } from '@/lib/utils/number';

import type { ProductInputProps } from '@/types/products.types';

import Input from '@/components/Input';
import InputWrapper from '@/components/InputWrapper';

interface PriceInputProps extends ProductInputProps {
  title: keyof AddProductInput;
  label: string;
  placeholder: string;
  unit?: string;
  required?: boolean;
}

const PriceInput = ({
  errors,
  register,
  title,
  label,
  placeholder,
  unit,
  required,
}: PriceInputProps) => {
  const [displayValue, setDisplayValue] = useState('');

  const {
    ref,
    onChange: registerOnChange,
    ...restRegister
  } = register(title, {
    setValueAs: (value: string) => {
      // 콤마 제거 후 숫자로 변환
      return value ? Number(value.replace(/,/g, '')) : 0;
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumberWithCommas(e.target.value);
    setDisplayValue(formatted);
    registerOnChange(e);
  };

  return (
    <InputWrapper
      label={label}
      htmlFor={title}
      required={required}
      error={!!errors[title]}
      errorMessage={errors[title]?.message}
      unit={unit}
    >
      <Input
        id={title}
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        ref={ref}
        {...restRegister}
      />
    </InputWrapper>
  );
};

export default PriceInput;
