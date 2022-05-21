import React, { useState } from 'react';
import Styled from './PostList.styled';
import PostCard from '@components/common/PostCard';
import { PostEntity } from 'types/fetchedData';
import search from '@lib/api/search';
import { useSearch } from '../context';
import { useQuery } from 'react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const PostList = () => {
  const { searchState } = useSearch();
  const [pageParam, setPageParam] = useState<number>(1);
  const { data, status, error } = useQuery(['posts', { ...searchState, pageParam }], search.getPosts, {
    keepPreviousData: true,
  });

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    isIntersecting ? setPageParam(pageParam + 1) : null;
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

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
      <div ref={setTarget}>load more...</div>
    </Styled.container>
  );
};
export default PostList;
