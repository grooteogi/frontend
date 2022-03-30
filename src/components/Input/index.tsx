import React from 'react';
import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  onClick?: (e: React.MouseEvent) => void;
  value?: string;
  type?: string;
}

const Input = ({ value, type, ...props }: InputProps) => {
  console.log('props : ', props.borderColor);
  return <StyledInput type={type} value={value} {...props}></StyledInput>;
};

export default Input;
