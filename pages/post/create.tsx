import { withRouter } from 'next/router';
import type { NextPage } from 'next';
import ScheduleEdit from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';
import { PostCreateProvider } from '@components/post/context';
import Link from 'next/link';
import Layout from '@components/post/layout';

const Create: NextPage = () => {
  return (
    <PostCreateProvider>
      <Layout.container>
        <MeetingInfoEdit />
        <ScheduleEdit />
        <Link href="/post/3">Move to Detail</Link>
      </Layout.container>
    </PostCreateProvider>
  );
};

export default withRouter(Create);
