interface InputWrapperProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
}

/**
 * InputWrapper 컴포넌트는 label, input, 에러 메시지를 하나의 블록으로 묶어주는 역할을 합니다.
 *
 * - label과 input을 연결합니다
 * - error 상태일 경우 에러 메시지를 출력합니다
 * - 자식 컴포넌트로 input 요소를 전달받아 사용합니다
 *
 * @param label input에 연결될 라벨 텍스트
 * @param htmlFor label의 htmlFor 속성 값으로, 연결될 input의 id
 * @param error 에러 상태 여부. true일 경우 에러 메시지를 출력
 * @param errorMessage 에러 메시지 텍스트
 */
const InputWrapper = ({
  label,
  htmlFor,
  required,
  children,
  error,
  errorMessage,
}: InputWrapperProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={htmlFor}
          className='text-sm font-medium leading-none text-gray-600'
        >
          {label}
          {required && <span className='text-red-500'>*</span>}
        </label>
      )}
      {children}
      {error && errorMessage && (
        <span className='block text-xs leading-none text-red-500'>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
export default InputWrapper;
