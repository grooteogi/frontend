import { FieldInputProps } from 'formik';
import React from 'react';
import Styled, { STextareaProps } from './Textarea.styled';

interface TextareaProps extends STextareaProps {
  field?: FieldInputProps<string>;
  value?: string;
  placeholder?: string;
  rows?: number;
}

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaProps> = ({
  field,
  value,
  placeholder,
  rows = 5,
  ...styles
}) => {
  return <Styled.textarea defaultValue={value} placeholder={placeholder} rows={rows} {...styles} {...field} />;
};

export default Textarea;
