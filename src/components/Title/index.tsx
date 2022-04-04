import { StyledTitle, STitleProps } from './style';

export interface TitleProps extends STitleProps {
  children: string;
}

const Title = ({ children, ...props }: TitleProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};
