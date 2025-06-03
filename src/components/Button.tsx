import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * 공통 버튼 컴포넌트
 *
 * @param customClassName tailwind className을 확장할 수 있습니다.
 */
const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ type = 'button', disabled, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          'h-[30px] rounded bg-black px-4 text-sm text-white',
          disabled && 'bg-gray-300',
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
