import { NextRouter, withRouter } from 'next/router';

interface WithRouterProps {
  router: NextRouter;
}

const OAuthRedirect = ({ router }: WithRouterProps) => {
  console.log(router.asPath);
  console.log('query', router.query);

  return <div>OAuthRedirect</div>;
};

export default withRouter(OAuthRedirect);
