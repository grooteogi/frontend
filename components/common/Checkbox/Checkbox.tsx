import { FieldInputProps } from 'formik';
import React from 'react';
import {
  EmptyDiv,
  SCheckboxComponentBox,
  SCheckboxComponentText,
  StyledCheckbox,
  StyledCheckboxDetail,
  StyledCheckboxInput,
  StyledCheckboxText,
} from './Checkbox.styled';

interface CheckBoxProps extends SCheckboxComponentBox, SCheckboxComponentText {
  field?: FieldInputProps<string>;
  label: string;
}

const Checkbox = ({
  field,
  label,
  link,
  width = '100%',
  height = '30px',
  paddingLeft,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & CheckBoxProps) => {
  const box = { width, height, paddingLeft };
  return (
    <StyledCheckbox {...box}>
      <EmptyDiv>
        <StyledCheckboxInput type={'checkbox'} {...props} {...field} />
        <StyledCheckboxText>{label}</StyledCheckboxText>
      </EmptyDiv>
      {link && <StyledCheckboxDetail link={link}>보기</StyledCheckboxDetail>}
    </StyledCheckbox>
  );
};

export default Checkbox;
