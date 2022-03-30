import React from 'react';
import { SInputProps, StyledInput } from './style';

interface InputProps extends SInputProps {
  onClick?: (e: React.MouseEvent) => void;
  value?: string;
}

const Input = ({ value, ...props }: InputProps) => {
  console.log('props : ', props.borderColor);
  return <StyledInput type="text" value={value} {...props}></StyledInput>;
};

export default Input;
