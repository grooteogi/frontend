import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import SideBar from '@components/mypage/SideBar';
import Modify from '@components/mypage/Modify';
import useProfile from '@components/mypage/useProfile';

const Profile = () => {
  const { profile } = useProfile();
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
        {profile !== undefined && <Modify profile={profile} />}
      </Layout.SectionRight>
    </Layout.PageContent>
  );
};

export default Profile;
