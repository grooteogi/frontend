import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import SideBar from './../../components/mypage/SideBar/SideBar';

const ReservationPage = () => {
  return (
    <>
      <Layout.PageContent>
        <Layout.SectionLeft>
          <SideBar />
        </Layout.SectionLeft>
        <Layout.SectionRight>
          <Layout.PageTitle>
            <Title size={'h1'} color={'black'}>
              찜한 약속
            </Title>
          </Layout.PageTitle>
        </Layout.SectionRight>
      </Layout.PageContent>
    </>
  );
};

export default ReservationPage;
