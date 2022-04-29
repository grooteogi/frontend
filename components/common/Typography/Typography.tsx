import { StyledTypo, STypoProps } from './Typography.styled';

export interface TypoProps extends STypoProps {
  children: (string | number)[] | string | number;
}

const Typography = ({ children, ...props }: TypoProps) => <StyledTypo {...props}>{children}</StyledTypo>;

export default Typography;
