import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

/**
 * 공통 텍스트 영역 컴포넌트
 *
 * @param className 커스텀 클래스 네임
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'min-h-12 w-full rounded-md border border-gray-500 px-3 py-1 text-sm leading-[1.6] text-black outline-none placeholder:text-gray-500',
          'focus-visible:ring-1 focus-visible:ring-gray-300',
          className,
        )}
        {...rest}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
