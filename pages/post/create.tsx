import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '@components/post/Layout';
import CreateSchedule from '@components/post/CreateSchedule';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit';

const Post: NextPage = () => {
  return (
    <Layout>
      <MeetingInfoEdit />
      <CreateSchedule />
    </Layout>
  );
};

export default withRouter(Post);
