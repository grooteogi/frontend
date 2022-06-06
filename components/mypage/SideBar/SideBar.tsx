import Link from 'next/link';
import { useProfile } from '../useProfile';
import Styled from './SideBar.styled';

const SideBar = () => {
  const { profile, isLoading } = useProfile();

  const sideBarList = {
    '신청한 약속': '/mypage/apply',
    '신청받은 약속': '/mypage/receive',
    '찜한 포스트': `/mypage/likes`,
    '작성한 포스트': `/mypage/posts`,
    '회원 정보 수정': `/mypage/profile`,
  };
  return (
    <Styled.aside>
      <Styled.nav>
        <Styled.ul>
          <Styled.li>
            <Styled.h3>{isLoading ? null : profile?.name}님!</Styled.h3>
            <Styled.h3>{`안녕하세요 :)`}</Styled.h3>
          </Styled.li>
          {Object.entries(sideBarList).map(([key, value]) => (
            <Link key={key} href={value} passHref>
              <Styled.li>{key}</Styled.li>
            </Link>
          ))}
        </Styled.ul>
      </Styled.nav>
    </Styled.aside>
  );
};

export default SideBar;
