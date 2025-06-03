import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

/**
 * input 공통 컴포넌트
 *
 * @param className 커스텀 클래스 네임
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-9 w-full rounded-md border border-gray-500 px-3 py-1 text-sm leading-[1.6] text-black outline-none placeholder:text-gray-500',
          'focus-visible:ring-1 focus-visible:ring-gray-300',
          className,
        )}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
