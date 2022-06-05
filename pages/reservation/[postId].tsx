import Title from '@components/common/Title';
import { ReservationProvider } from '@components/reservation/context';
import Layout from '@components/reservation/layout';
import MentorProfile from '@components/reservation/MentorProfile/MentorProfile';
import ReservationForm from '@components/reservation/ReservationForm/ReservationForm';
import SelectReservationPanel from '@components/reservation/SelectReservationPanel/SelectReservationPanel';
import schedules from '@components/reservation/reservation.schedules.mock.json';
import post from '@components/reservation/reservation.post.mock.json';

const ReservationPage = () => {
  return (
    <ReservationProvider>
      <Layout.PageContainer>
        <Layout.PageTitle>
          <Title size={'h1'} color={'black'}>
            약속 신청
          </Title>
        </Layout.PageTitle>
        <Layout.PageContent>
          <Layout.SectionLeft>
            <MentorProfile post={post} />
            <SelectReservationPanel schedules={schedules} />
          </Layout.SectionLeft>
          <Layout.SectionRight>
            <ReservationForm />
          </Layout.SectionRight>
        </Layout.PageContent>
      </Layout.PageContainer>
    </ReservationProvider>
  );
};

export default ReservationPage;
