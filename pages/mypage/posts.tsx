import Layout from '@components/mypage/layout';
import { nanoid } from 'nanoid';
import MyPagePostCard from '@components/mypage/MyPagePostCard';
import Content from '@components/mypage/Content';
import usePostList from '@components/mypage/usePostList';
import { useRouter } from 'next/router';

const ReservationPage = () => {
  const router = useRouter();
  const type = 'write';
  const { isLoading, postList, error } = usePostList(type);

  if (isLoading) <div>loading</div>;
  if (error) <div>error</div>;
  return (
    <Content title={'작성한 포스트'}>
      <Layout.listWrapper>
        {postList?.map(post => (
          <Layout.myPageItem key={nanoid()} onClick={() => router.push(`/post/${post.postId}`)}>
            <MyPagePostCard key={nanoid()} post={post} />
          </Layout.myPageItem>
        ))}
      </Layout.listWrapper>
    </Content>
  );
};

export default ReservationPage;
