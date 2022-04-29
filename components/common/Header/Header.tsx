import { StyledHeader, StyledHeaderList, StyledHeaderAnchor, StyledHeaderBox, SHeaderDevice } from './Header.styled';

type User = {
  name: string;
};

export type NavList = {
  value: string;
  isLogo?: boolean;
  isAuth?: boolean;
  leftPosition?: boolean;
};

const navLists = [
  { value: '🌳그루터기', isLogo: true, leftPosition: true },
  { value: '약속 잡기', leftPosition: true },
  { value: '약속 찾기', leftPosition: true },
  { value: '채팅', isAuth: true },
  { value: '내정보', isAuth: true },
  { value: '로그아웃', isAuth: true },
  { value: '로그인', isAuth: false },
];

interface HeaderProps extends SHeaderDevice {
  user?: User;
}

const HeaderList = ({ device, navList }: { device: 'sm' | 'md'; navList: NavList }) => {
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

const Header = ({ user, device }: HeaderProps) => {
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
