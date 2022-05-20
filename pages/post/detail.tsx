import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow';
import Layout from '@components/post/Layout';
import MeetingInfo from '@components/post/MeetingInfo';
import postInfo from '@components/post/detail.meetingInfo.mock';
import schedule from '@components/post/detail.schedule.mock';
import review from '@components/post/detail.review.mock';

const Post: NextPage = () => {
  return (
    <Layout>
      <MeetingInfo {...postInfo} />
      <ShowSchedule schedules={schedule} />
      <ReviewList reviews={review} />
    </Layout>
  );
};

export default withRouter(Post);
