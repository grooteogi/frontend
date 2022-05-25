import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import ScheduleEdit from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';
import StickyBar from '@components/post/StickyBar/StickyBar';
import { PostCreateProvider } from '@components/post/context';
import Layout from '@components/post/layout';
import Link from 'next/link';

const Create: NextPage = () => {
  return (
    <PostCreateProvider>
      <Layout>
        <MeetingInfoEdit />
        <ScheduleEdit />
        <Link href="/post/3">Move to Detail</Link>
      </Layout>
    </PostCreateProvider>
  );
};

export default withRouter(Create);
