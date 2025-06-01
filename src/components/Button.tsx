import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClassName?: string;
}

/**
 * 공통 버튼 컴포넌트
 *
 * @param customClassName tailwind className을 확장할 수 있습니다.
 */
const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ type = 'button', children, customClassName, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'h-[30px] rounded bg-black px-4 text-sm text-white',
          customClassName,
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
