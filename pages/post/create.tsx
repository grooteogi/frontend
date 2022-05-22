import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '@components/post/Layout';
import CreateSchedule from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';
import StickyBar from '@components/post/StickyBar/StickyBar';
import CreateFormik from '@components/post/CreateFormik';
import { PostCreateProvider } from '@components/post/context';

const Create: NextPage = () => {
  return (
    <PostCreateProvider>
      <Layout>
        <CreateFormik>
          <MeetingInfoEdit />
        </CreateFormik>
        <CreateSchedule />
      </Layout>
      <StickyBar buttonName={'약속 생성하기'} />
    </PostCreateProvider>
  );
};

export default withRouter(Create);
