import {
  SAgreeCheckboxRectProps,
  StyledAgreeCheckboxInput,
  StyledAgreeCheckboxRect as StyledAgreeCheckboxBox,
} from './style';

interface AgreeCheckboxRectProps extends SAgreeCheckboxRectProps {}

const AgreeCheckboxRect = ({ ...props }: AgreeCheckboxRectProps) => {
  return (
    <>
      <StyledAgreeCheckboxInput type="checkbox" />
      <StyledAgreeCheckboxBox {...props} />
    </>
  );
};

export default AgreeCheckboxRect;
