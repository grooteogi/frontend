import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import ProfileEdit from './ProfileEdit';
import SideBar from '../../components/mypage/SideBar';

const Profile = () => {
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
        <ProfileEdit />
      </Layout.SectionRight>
    </Layout.PageContent>
  );
};

export default Profile;
