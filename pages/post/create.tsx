import Create from '@components/post/Create';
import { withRouter } from 'next/router';
import type { NextPage } from 'next';

const Post: NextPage = () => {
  return <Create />;
};

export default withRouter(Post);
