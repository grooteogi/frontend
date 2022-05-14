import React from 'react';
import Styled, { STextareaProps } from './Textarea.styled';

interface TextareaProps extends STextareaProps {
  value?: string;
  placeholder?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ value, placeholder, rows = 5, ...styles }) => {
  return <Styled.textarea defaultValue={value} placeholder={placeholder} rows={rows} {...styles} />;
};

export default Textarea;
