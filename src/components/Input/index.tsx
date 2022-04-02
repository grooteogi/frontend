import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  value?: string;
  type?: string;
  placeholder?: string;
}

const Input = ({ value, type = 'text', placeholder, ...props }: InputProps) => {
  return <StyledInput type={type} value={value} placeholder={placeholder} {...props}></StyledInput>;
};

export default Input;
