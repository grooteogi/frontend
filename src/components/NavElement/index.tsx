import { SLiProps, StyledLi, StyledA } from './style';

interface LiProps extends SLiProps {
  name: string;
}

const NavElement = ({ name, ...props }: LiProps) => {
  return (
    <StyledLi {...props}>
      <StyledA {...props}>{name}</StyledA>
    </StyledLi>
  );
};

export default NavElement;
