import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow/ScheduleShow';
import MeetingInfo from '@components/post/MeetingInfo/MeetingInfo';
import StickyBar from '@components/post/StickyBar/StickyBar';
import post from '@lib/api/post';
import Link from 'next/link';
import Layout from '@components/post/layout';
import schedule from '@components/post/detail.schedule.mock';
import review from '@components/post/detail.review.mock';

import { dehydrate, QueryClient } from 'react-query';
import useSchedules from '@components/post/useSchedules';
import usePost from '@components/post/usePost';

const Detail: NextPage<any> = () => {
  const router = useRouter();
  const postId = router.query.postId as string;
  const { postData } = usePost(postId);
  const { schedulesData } = useSchedules(postId);

  return (
    <Layout.container>
      <MeetingInfo post={postData} />
      <ShowSchedule schedules={schedulesData} />
      <ReviewList reviews={review} />
      <Link href="/post/create">Move to Create</Link>
      <StickyBar buttonName={'약속 신청하기'}></StickyBar>
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
