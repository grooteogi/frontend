import Styled from './SideBar.styled';

const SideBar = () => {
  const userId = '그루트 1';
  const sideBarList = {
    '신청한 약속': '/mypage/apply',
    '신청받은 약속': 'mypage/receive',
    '찜한 약속': `mypage/likes`,
    '작성한 리뷰': `mypage/reviews`,
    '작성한 포스트': `mypage/posts`,
    '회원 정보 수정': `mypage/profile`,
  };
  return (
    <Styled.aside>
      <Styled.nav>
        <Styled.ul>
          <Styled.li>
            <Styled.h3>{`${userId}님!`}</Styled.h3>
            <Styled.h3>{`안녕하세요 :)`}</Styled.h3>
          </Styled.li>
          {Object.keys(sideBarList).map(key => (
            <Styled.li key={key}>{key}</Styled.li>
          ))}
        </Styled.ul>
      </Styled.nav>
    </Styled.aside>
  );
};

export default SideBar;
