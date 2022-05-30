import { useRouter, withRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow/ScheduleShow';
import MeetingInfo from '@components/post/MeetingInfo/MeetingInfo';
import StickyBar from '@components/post/StickyBar/StickyBar';
import post from '@lib/api/post';
import Link from 'next/link';
import Layout from '@components/post/layout';
import postInfo from '@components/post/detail.meetingInfo.mock';
import schedule from '@components/post/detail.schedule.mock';
import review from '@components/post/detail.review.mock';

const Detail: NextPage<any> = ({ postData }) => {
  console.log('postData', postData);

  return (
    <Layout.container>
      <MeetingInfo {...postInfo} />
      <ShowSchedule schedules={schedule} />
      <ReviewList reviews={review} />
      <Link href="/post/create">Move to Create</Link>
      <StickyBar buttonName={'약속 신청하기'}></StickyBar>
    </Layout.container>
  );
};

export async function getServerSideProps(ctx: { params: { postId: number } }) {
  const postId = ctx.params.postId;
  const postData = await post.getPost(postId);

  return { props: { postData } };
}

export default withRouter(Detail);
