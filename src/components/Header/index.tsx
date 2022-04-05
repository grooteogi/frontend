import { StyledHeader, StyledHeaderList, StyledHeaderAnchor, StyledHeaderBox, SHeaderDevice } from './style';

type User = {
  name: string;
};

export type NavList = {
  value: string;
  isLogo?: boolean;
  isAuth?: boolean;
  leftPosition?: boolean;
};

interface HeaderProps extends SHeaderDevice {
  user?: User;
  navLists: NavList[];
}

const HeaderList = ({ device, navList }: { device: 'sm' | 'md' | 'lg'; navList: NavList }) => {
  if (!navList.isLogo) navList.isLogo = false;
  if (!navList.leftPosition) navList.leftPosition = false;
  const headerListProps = { device: device, leftPosition: navList.leftPosition };
  const headerAnchorProps = { device: device, isLogo: navList.isLogo };
  return (
    <>
      <StyledHeaderList {...headerListProps}>
        <StyledHeaderAnchor {...headerAnchorProps}>{navList.value}</StyledHeaderAnchor>
      </StyledHeaderList>
    </>
  );
};

const Header = ({ user, device, navLists }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderBox>
        {navLists
          .filter(navList => navList.isAuth === undefined)
          .map(navList => (
            <HeaderList device={device} key={navList.value} navList={navList}></HeaderList>
          ))}
      </StyledHeaderBox>
      <StyledHeaderBox leftPosition={false}>
        {navLists
          .filter(navList => (user && navList.isAuth) || (navList.isAuth !== undefined && !user && !navList.isAuth))
          .map(navList => (
            <HeaderList device={device} key={navList.value} navList={navList}></HeaderList>
          ))}
      </StyledHeaderBox>
    </StyledHeader>
  );
};

export default Header;
