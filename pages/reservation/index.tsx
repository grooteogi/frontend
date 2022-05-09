import Title from '@components/common/Title';
import Layout from '@components/reservation/layout';

const ReservationPage = () => {
  return (
    <>
      <Layout.PageTitle>
        <Title size={'h1'} color={'black'}>
          약속 신청
        </Title>
      </Layout.PageTitle>
      <Layout.PageContent>
        <Layout.SectionLeft>
          <MentorProfile />
          <SelectReservationPanel />
        </Layout.SectionLeft>
        <Layout.SectionRight>
          <ReservationForm />
        </Layout.SectionRight>
      </Layout.PageContent>
    </>
  );
};

export default ReservationPage;
