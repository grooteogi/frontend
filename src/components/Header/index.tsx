import NavElement from '../NavElement';
import { SLiProps } from '../NavElement/style';
import { SHeaderProps, StyledHeader } from './style';

type User = {
  name: string;
};

interface HeaderProps extends SHeaderProps, SLiProps {
  user?: User;
}

const Header = ({ user, ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      <div>
        <NavElement name="🌳그루터기" fontSize={16} fontWeight={'bold'} fontColor={'#000000'} />
        <NavElement name="약속 잡기" fontWeight={'normal'} />
        <NavElement name="약속 찾기" fontWeight={'normal'} />
      </div>
      <div>
        {user ? (
          <>
            <NavElement name="로그아웃" float={'right'} />
            <NavElement name="내정보" float={'right'} />
            <NavElement name="채팅" float={'right'} />
          </>
        ) : (
          <>
            <NavElement name="회원가입" float={'right'} />
            <NavElement name="로그인" float={'right'} />
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
