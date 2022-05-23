import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import CreateSchedule from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';
import StickyBar from '@components/post/StickyBar/StickyBar';
import { PostCreateProvider } from '@components/post/context';
import Layout from '@components/post/layout';

const Create: NextPage = () => {
  return (
    <PostCreateProvider>
      <Layout>
        <MeetingInfoEdit />
        <CreateSchedule />
      </Layout>
    </PostCreateProvider>
  );
};

export default withRouter(Create);
