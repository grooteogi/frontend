import HeaderNavElement from '../NavElement';
import { SHeaderListProps } from '../NavElement/style';
import { SHeaderProps, StyledHeader } from './style';

type User = {
  name: string;
};

interface HeaderProps extends SHeaderProps, SHeaderListProps {
  user?: User;
}

const Header = ({ user, ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      <div>
        <HeaderNavElement name="🌳그루터기" fontSize={16} fontWeight={'bold'} fontColor={'#000000'} />
        <HeaderNavElement name="약속 잡기" fontWeight={'normal'} />
        <HeaderNavElement name="약속 찾기" fontWeight={'normal'} />
      </div>
      <div>
        {user ? (
          <>
            <HeaderNavElement name="로그아웃" float={'right'} />
            <HeaderNavElement name="내정보" float={'right'} />
            <HeaderNavElement name="채팅" float={'right'} />
          </>
        ) : (
          <>
            <HeaderNavElement name="회원가입" float={'right'} />
            <HeaderNavElement name="로그인" float={'right'} />
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
