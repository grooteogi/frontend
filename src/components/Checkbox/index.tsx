import {
  EmptyDiv,
  SCheckboxComponentBox,
  SCheckboxComponentText,
  StyledCheckbox,
  StyledCheckboxDetail,
  StyledCheckboxInput,
  StyledCheckboxText,
} from './style';

interface CheckBoxProps extends SCheckboxComponentBox, SCheckboxComponentText {
  label: string;
}

const Checkbox = ({ label, link, width = '100%', height = '30px' }: CheckBoxProps) => {
  const box = { width, height };
  return (
    <StyledCheckbox {...box}>
      <EmptyDiv>
        <StyledCheckboxInput type={'checkbox'} />
        <StyledCheckboxText>{label}</StyledCheckboxText>
      </EmptyDiv>
      {link && <StyledCheckboxDetail>보기</StyledCheckboxDetail>}
    </StyledCheckbox>
  );
};

export default Checkbox;
