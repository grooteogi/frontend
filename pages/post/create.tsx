import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '@components/post/layout';
import CreateSchedule from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';
import StickyBar from '@components/post/StickyBar/StickyBar';
import { PostCreateProvider } from '@components/post/context';

const Create: NextPage = () => {
  return (
    <PostCreateProvider>
      <Layout>
        <MeetingInfoEdit />
        <CreateSchedule />
      </Layout>
      <StickyBar buttonName={'약속 생성하기'} />
    </PostCreateProvider>
  );
};

export default withRouter(Create);
