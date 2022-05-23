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
  checked?: boolean;
  defaultChecked?: boolean;
  onClick?: () => void;
}

const Checkbox = ({
  field,
  label,
  link,
  width = '100%',
  height = '30px',
  paddingLeft,
  onClick,
  checked,
}: React.InputHTMLAttributes<HTMLInputElement> & CheckBoxProps) => {
  const box = { width, height, paddingLeft };
  return (
    <StyledCheckbox {...box}>
      <EmptyDiv>
        <StyledCheckboxInput type={'checkbox'} onClick={onClick} checked={checked} {...field} />
        <StyledCheckboxText>{label}</StyledCheckboxText>
      </EmptyDiv>
      {link && <StyledCheckboxDetail link={link}>보기</StyledCheckboxDetail>}
    </StyledCheckbox>
  );
};

export default Checkbox;
