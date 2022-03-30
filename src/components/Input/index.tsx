import React from 'react';
import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  value?: string;
  type?: string;
}

const Input = ({ value, type, ...props }: InputProps) => {
  return <StyledInput type={type} value={value} {...props}></StyledInput>;
};

export default Input;
