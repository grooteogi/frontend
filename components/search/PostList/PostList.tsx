import PostCard from '@components/common/PostCard';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import search from '@lib/api/search';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { PostEntity } from 'types/fetchedData';
import { useSearch } from '../context';
import Styled from './PostList.styled';

const PostList = () => {
  const { searchState, posts, setPosts } = useSearch();
  const { data, status, error } = useQuery(['posts', searchState], search.getPosts);

  const bottomRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver({ target: bottomRef, onIntersect: () => undefined });

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error}</p>
  ) : (
    <Styled.container>
      {data.map((post: PostEntity) => {
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
