import Input from '@/components/Input';
import InputWrapper from '@/components/InputWrapper';

const NewProductForm = () => {
  return (
    <form>
      <InputWrapper
        label='상품명'
        htmlFor='title'
        required
        error
        errorMessage='에러 메세지'
      >
        <Input id='title' placeholder='상품명' />
      </InputWrapper>
    </form>
  );
};

export default NewProductForm;
