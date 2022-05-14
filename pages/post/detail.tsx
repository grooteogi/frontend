import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import ReviewList from '@components/post/ReviewList';
import ShowSchedule from '@components/post/ScheduleShow';
import Layout from '@components/post/Layout';
import post, { MeetingInfoType, ReviewType, ScheduleType } from '@components/post/detail.mock';
import MeetingInfo from '@components/post/MeetingInfo';

const Post: NextPage = () => {
  const { ...meetingInfo }: MeetingInfoType = post;
  const { schedules }: ScheduleType = post;
  const { reviews }: ReviewType = post;
  return (
    <Layout>
      <MeetingInfo {...meetingInfo} />
      <ShowSchedule schedules={schedules} />
      <ReviewList reviews={reviews} />
    </Layout>
  );
};

export default withRouter(Post);
