import PostCard from '@components/common/PostCard';
import useOnScreen from '@hooks/useOnScreen';
import search from '@lib/api/search';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { PostEntity } from 'types/fetchedData';
import { useSearch } from '../context';
import Styled from './PostList.styled';

const PostList = () => {
  const SearchContext = useSearch();
  const { data, isError, isLoading } = useQuery(['posts', SearchContext.state], search.getPosts);

  const bottomRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(bottomRef);

  if (isError) return <>Error</>;
  if (isLoading) return <>Loading...</>;
  return (
    <Styled.container>
      {data?.map((post: PostEntity) => {
        return (
          <PostCard
            key={post.postId}
            postEntity={post}
            setClickedPostId={() => {
              return;
            }}
          />
        );
      })}
      <div ref={bottomRef}>load more...</div>
    </Styled.container>
  );
};
export default PostList;
