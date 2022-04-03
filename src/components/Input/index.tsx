import React from 'react';
import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input = ({ value, type = 'text', placeholder, onChange, ...props }: InputProps) => {
  return <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange} {...props}></StyledInput>;
};

export default Input;
