import { SHeaderListProps as SHeaderListProps, StyledHeaderList, StyledHeaderAnchor } from './style';

interface HeaderListProps extends SHeaderListProps {
  name: string;
}

const HeaderNavElement = ({ name, ...props }: HeaderListProps) => {
  return (
    <StyledHeaderList {...props}>
      <StyledHeaderAnchor {...props}>{name}</StyledHeaderAnchor>
    </StyledHeaderList>
  );
};

export default HeaderNavElement;
