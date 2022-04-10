import React from 'react';
import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input = ({ type = 'text', value, placeholder, onChange, ...props }: InputProps) => {
  return <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange} {...props}></StyledInput>;
};

export default Input;
