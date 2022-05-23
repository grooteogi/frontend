import Title from '@components/common/Title';
import { ReservationProvider } from '@components/reservation/context';
import Layout from '@components/reservation/layout';
import MentorProfile from '@components/reservation/MentorProfile/MentorProfile';
import ReservationForm from '@components/reservation/ReservationForm/ReservationForm';
import SelectReservationPanel from '@components/reservation/SelectReservationPanel/SelectReservationPanel';

const ReservationPage = () => {
  return (
    <ReservationProvider>
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
    </ReservationProvider>
  );
};

export default ReservationPage;
