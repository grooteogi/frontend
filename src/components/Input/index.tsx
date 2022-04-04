import React from 'react';
import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input = ({ value, placeholder, onChange, ...props }: InputProps) => {
  return (
    <StyledInput type={'text'} value={value} placeholder={placeholder} onChange={onChange} {...props}></StyledInput>
  );
};

export default Input;
