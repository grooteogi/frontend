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
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onClick?: () => void;
}

const Checkbox = ({
  label,
  link,
  width = '100%',
  height = '30px',
  paddingLeft,
  onClick,
  checked,
  defaultChecked = false,
}: CheckBoxProps) => {
  const box = { width, height, paddingLeft };
  return (
    <StyledCheckbox {...box}>
      <EmptyDiv>
        <StyledCheckboxInput type={'checkbox'} onClick={onClick} checked={checked} defaultChecked={defaultChecked} />
        <StyledCheckboxText>{label}</StyledCheckboxText>
      </EmptyDiv>
      {link && <StyledCheckboxDetail link={link}>보기</StyledCheckboxDetail>}
    </StyledCheckbox>
  );
};

export default Checkbox;
