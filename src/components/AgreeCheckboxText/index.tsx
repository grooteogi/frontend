import { SAgreeCheckboxTextProps, StyledAgreeCheckboxText } from './style';

interface AgreeCheckboxTextProps extends SAgreeCheckboxTextProps {
  value?: string;
}

const AgreeCheckboxText = ({ value, ...props }: AgreeCheckboxTextProps) => {
  return <StyledAgreeCheckboxText {...props}>{value}</StyledAgreeCheckboxText>;
};

export default AgreeCheckboxText;
