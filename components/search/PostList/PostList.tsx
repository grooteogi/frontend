import PostCard from '@components/common/PostCard';
import { postData } from '@lib/api/restApi';
import search from '@lib/api/search';
import { useQuery } from 'react-query';
import { PostEntity } from 'types/fetchedData';
import Styled from './PostList.styled';

const PostList = () => {
  const { data, isError, isLoading } = useQuery(['posts'], search.getPosts);

  if (isError) return <>Error</>;
  if (isLoading) return <>Loading...</>;

  return (
    <Styled.container>
      {data.map((post: PostEntity) => {
        return <PostCard key={post.postId} postEntity={post} setClickedPostId={() => {}} />;
      })}
    </Styled.container>
  );
};
export default PostList;
