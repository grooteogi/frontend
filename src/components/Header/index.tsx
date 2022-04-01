import HeaderNavElement from '../NavElement';
import { SHeaderListProps } from '../NavElement/style';
import { SHeaderProps, StyledDiv, StyledHeader } from './style';

const leftElement = [{ name: '🌳그루터기', isLogo: true }, { name: '약속 잡기' }, { name: '약속 찾기' }];
const rightElement = [
  { name: '로그아웃', isAuthAvailable: true },
  { name: '내정보', isAuthAvailable: true },
  { name: '채팅', isAuthAvailable: true },
  { name: '회원가입', isAuthAvailable: false },
  { name: '로그인', isAuthAvailable: false },
];

type User = {
  name: string;
};

interface HeaderProps extends SHeaderProps, SHeaderListProps {
  user?: User;
}

const Header = ({ user, ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      <StyledDiv>
        <HeaderNavElement name="" />
        {leftElement.map(e =>
          e.isLogo ? (
            <HeaderNavElement name={e.name} fontSize={16} fontWeight={'bold'} fontColor={'#000000'} />
          ) : (
            <HeaderNavElement name={e.name} />
          ),
        )}
      </StyledDiv>
      <StyledDiv>
        {rightElement.map(e =>
          user
            ? e.isAuthAvailable && (
                <>
                  <HeaderNavElement name={e.name} float={'right'} />
                </>
              )
            : !e.isAuthAvailable && (
                <>
                  <HeaderNavElement name={e.name} float={'right'} />
                </>
              ),
        )}
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
