import React from 'react';
import Styled from './Textarea.styled';

interface TextareaProps {
  rows?: number;
  width?: number;
  height?: number;
  fontColor?: string;
  borderColor?: string;
  value?: string;
  placeholder?: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, placeholder, rows = 5 }) => {
  return <Styled.textarea defaultValue={value} placeholder={placeholder} rows={rows} />;
};

export default Textarea;
