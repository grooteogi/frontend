import Router, { NextRouter, useRouter, withRouter } from 'next/router';
// import path from 'node:path/win32';
// import { useEffect } from 'react';
// import Index from '@components/post/index';

// const Post = ({ post }: Post) => {
//   const router = useRouter();
//   const { id } = router.query;
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }
//   return <Index {...post} />;
// };

// async function getStaticPaths({ params }) {
//   const res = await fetch(`http://localhost:8080/post/${params.postId}`);
//   const posts = await res.json();
//   const paths = posts.map(post => ({
//     params: { id: post.id.toString() },
//   }));
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export default withRouter(OAuthRedirect);
