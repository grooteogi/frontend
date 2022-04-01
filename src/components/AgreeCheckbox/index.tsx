import { StyledAgreeCheckboxRect } from '../AgreeCheckboxRect/style';
import AgreeCheckboxText from '../AgreeCheckboxText';
import { SAgreeCheckboxProps, StyledAgreeCheckbox } from './style';

interface AgreeCheckboxProps extends SAgreeCheckboxProps {}

const AgreeCheckboxRect = ({ ...props }: AgreeCheckboxProps) => {
  return (
    <StyledAgreeCheckbox {...props}>
      <StyledAgreeCheckboxRect />
      <AgreeCheckboxText value="약관동의문구(필수)"></AgreeCheckboxText>
      <AgreeCheckboxText value="보기" float="right"></AgreeCheckboxText>
    </StyledAgreeCheckbox>
  );
};

export default AgreeCheckboxRect;
