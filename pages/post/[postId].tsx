import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow/ScheduleShow';
import MeetingInfo from '@components/post/MeetingInfo/MeetingInfo';
import StickyBar from '@components/post/StickyBar/StickyBar';
import post from '@lib/api/post';
import Layout from '@components/post/layout';

import { dehydrate, QueryClient } from 'react-query';
import useSchedules from '@components/post/useSchedules';
import usePost from '@components/post/usePost';
import useReviews from '@components/post/useReviews';

const Detail: NextPage = () => {
  const router = useRouter();
  const postId = router.query.postId as string;
  const { postData } = usePost(postId);
  const { schedulesData } = useSchedules(postId);
  const { reviewsData } = useReviews(postId);

  return (
    <Layout.container>
      <MeetingInfo post={postData} />
      <ShowSchedule schedules={schedulesData} />
      <ReviewList reviews={review} />
      <StickyBar
        buttonName={'약속 신청하기'}
        onClick={() => router.push({ pathname: '/reservation/[postId]', query: { postId } })}
      />
    </Layout.container>
  );
};

export async function getServerSideProps(ctx: { params: { postId: string } }) {
  const postId = ctx.params.postId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', postId], async () => (await post.getPost(postId)).data);
  await queryClient.prefetchQuery(['schedules', postId], async () => (await post.getSchedules(postId)).data);

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default Detail;
