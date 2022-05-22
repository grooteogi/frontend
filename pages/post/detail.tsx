import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow/ScheduleShow';
import Layout from '@components/post/layout';
import MeetingInfo from '@components/post/MeetingInfo/MeetingInfo';
import postInfo from '@components/post/detail.meetingInfo.mock';
import schedule from '@components/post/detail.schedule.mock';
import review from '@components/post/detail.review.mock';
import StickyBar from '@components/post/StickyBar/StickyBar';

const Detail: NextPage = () => {
  return (
    <Layout>
      <MeetingInfo {...postInfo} />
      <ShowSchedule schedules={schedule} />
      <ReviewList reviews={review} />
      <StickyBar buttonName={'약속 신청하기'}></StickyBar>
    </Layout>
  );
};

export default withRouter(Detail);
