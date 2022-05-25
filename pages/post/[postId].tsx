import { useRouter, withRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow/ScheduleShow';
import MeetingInfo from '@components/post/MeetingInfo/MeetingInfo';
import postInfo from '@components/post/detail.meetingInfo.mock';
import schedule from '@components/post/detail.schedule.mock';
import review from '@components/post/detail.review.mock';
import StickyBar from '@components/post/StickyBar/StickyBar';
import post from '@lib/api/post';
import Link from 'next/link';
import { Layout } from '@components/post/layout';

const Detail: NextPage = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  const postId = Number(router.query.postId);
  console.log('postId : ', postId);
  const postData = post.detailPost(postId);
  console.log('get Data : ', postData);

  return (
    <Layout>
      <MeetingInfo {...postInfo} />
      <ShowSchedule schedules={schedule} />
      <ReviewList reviews={review} />
      <Link href="/post/create">Move to Create</Link>
      <StickyBar buttonName={'약속 신청하기'}></StickyBar>
    </Layout>
  );
};

export default withRouter(Detail);
