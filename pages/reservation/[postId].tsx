import Title from '@components/common/Title';
import { ReservationProvider } from '@components/reservation/context';
import Layout from '@components/reservation/layout';
import MentorProfile from '@components/reservation/MentorProfile/MentorProfile';
import ReservationForm from '@components/reservation/ReservationForm/ReservationForm';
import SelectReservationPanel from '@components/reservation/SelectReservationPanel/SelectReservationPanel';
import { useRouter } from 'next/router';
import usePost from '@components/post/usePost';
import { dehydrate, QueryClient } from 'react-query';
import post from '@lib/api/post';
import useSchedules from '@components/post/useSchedules';

const ReservationPage = () => {
  const router = useRouter();
  const postId = router.query.postId as string;
  const { postData } = usePost(postId);
  const { schedulesData } = useSchedules(postId);

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
            <MentorProfile post={postData} />
            <SelectReservationPanel schedules={schedulesData} />
          </Layout.SectionLeft>
          <Layout.SectionRight>
            <ReservationForm />
          </Layout.SectionRight>
        </Layout.PageContent>
      </Layout.PageContainer>
    </ReservationProvider>
  );
};

export async function getServerSideProps(ctx: { params: { postId: string } }) {
  const postId = ctx.params.postId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', postId], async () => (await post.getPost(postId)).data);
  await queryClient.prefetchQuery(['schedules', postId], async () => (await post.getSchedules(postId)).data);

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default ReservationPage;
