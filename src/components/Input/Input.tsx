import React from 'react';
import Styled from './style';

interface TextareaProps {
  rows?: number;
}

interface InputProps extends TextareaProps {
  type: 'short' | 'long';
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input: React.FC<InputProps> = ({ type, value, placeholder, onChange, rows = 5 }) => {
  if (type == 'long')
    return <Styled.textarea defaultValue={value} placeholder={placeholder} onChange={onChange} rows={rows} />;
  return <Styled.input defaultValue={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
