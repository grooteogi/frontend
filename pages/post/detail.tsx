import Detail from '@components/post/Detail';
import { withRouter } from 'next/router';
import type { NextPage } from 'next';

const Post: NextPage = () => {
  return <Detail />;
};

export default withRouter(Post);
