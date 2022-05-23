import { FieldInputProps } from 'formik';
import React from 'react';
import Styled, { SInputProps } from './Input.styled';

interface InputProps extends SInputProps {
  field?: FieldInputProps<string>;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  field,
  type = 'text',
  value,
  placeholder,
  onChange,
  ...style
}) => {
  return (
    <Styled.input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
      {...style}
      {...field}
    />
  );
};

export default Input;
