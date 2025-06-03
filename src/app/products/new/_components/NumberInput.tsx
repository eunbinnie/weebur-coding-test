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

/**
 * NumberInput
 *
 * 가격(숫자) 입력 전용 컴포넌트입니다.
 * 입력 시 자동으로 천 단위 콤마가 추가되어 표시되며, 폼에 저장할 때는 콤마 제거 후 숫자 값으로 변환합니다.
 */
const NumberInput = ({
  errors,
  register,
  title,
  label,
  placeholder,
  unit,
  required,
}: PriceInputProps) => {
  // 콤마를 포함하여 표시되는 입력값
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

  // 입력값 변경 시 콤마 추가해서 표시
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

export default NumberInput;
