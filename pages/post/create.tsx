import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import Layout from '@components/post/Layout';
import CreateSchedule from '@components/post/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit';
import StickyBar from '@components/post/StickyBar';

const Create: NextPage = () => {
  return (
    <Layout>
      <MeetingInfoEdit />
      <CreateSchedule />
      <StickyBar buttonName={'약속 생성하기'} />
    </Layout>
  );
};

export default withRouter(Create);
