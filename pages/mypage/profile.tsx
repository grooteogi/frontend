import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import SideBar from '@components/mypage/SideBar';
import Modify from '@components/mypage/Modify';
import { UserProfileResponseDto } from 'types/response';

const Profile = () => {
  const sampleUser: UserProfileResponseDto = {
    nickname: '임시 닉네임',
    email: 'sample123@sample.com',
    name: '임시 이름',
    phone: '010-0000-0000',
    address: '서울시 용산구',
    imageUrl: '/imgs/profile.png',
  };
  return (
    <Layout.PageContent>
      <Layout.SectionLeft>
        <SideBar />
      </Layout.SectionLeft>
      <Layout.SectionRight>
        <Layout.PageTitle>
          <Title size={'h2'} color={'black'}>
            회원 정보 수정
          </Title>
        </Layout.PageTitle>
        <Modify {...sampleUser} />
      </Layout.SectionRight>
    </Layout.PageContent>
  );
};

export default Profile;
