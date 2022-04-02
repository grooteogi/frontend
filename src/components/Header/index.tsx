import { StyledHeader, StyledHeaderList, StyledHeaderAnchor, StyledDiv } from './style';

type User = {
  name: string;
};

type NavList = {
  value: string;
  isLogo?: boolean;
  isAuth?: boolean;
  leftPosition?: boolean;
};

interface HeaderProps {
  user?: User;
  navLists: NavList[];
}

const HeaderList = ({ ...navList }) => {
  return (
    <>
      <StyledHeaderList leftPosition={navList.leftPosition}>
        <StyledHeaderAnchor isLogo={navList.isLogo}>{navList.value}</StyledHeaderAnchor>
      </StyledHeaderList>
    </>
  );
};

const Header = ({ user, navLists }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledDiv>
        {navLists
          .filter(navList => navList.isAuth === undefined)
          .map(navList => (
            <HeaderList key={navList.value} {...navList}></HeaderList>
          ))}
      </StyledDiv>
      <StyledDiv leftPosition={false}>
        {navLists
          .filter(navList => (user && navList.isAuth) || (navList.isAuth !== undefined && !user && !navList.isAuth))
          .map(navList => (
            <HeaderList key={navList.value} {...navList}></HeaderList>
          ))}
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
