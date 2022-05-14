import React from 'react';
import Styled, { SInputProps } from './Input.styled';

interface InputProps extends SInputProps {
  value?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, placeholder, onChange, ...style }) => {
  return <Styled.input type={type} defaultValue={value} placeholder={placeholder} onChange={onChange} {...style} />;
};

export default Input;
