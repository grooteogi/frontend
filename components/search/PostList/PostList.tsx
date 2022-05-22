import React, { useState } from 'react';
import Styled from './PostList.styled';
import PostCard from '@components/common/PostCard';
import { PostEntity } from 'types/fetchedData';
import search from '@lib/api/search';
import { useSearch } from '../context';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const PostList = () => {
  const { searchState } = useSearch();
  // const [pageParam, setPageParam] = useState<number>(1);
  // const { data, isLoading, status, error } = useInfiniteQuery(
  // ['posts', { ...searchState, pageParam }],
  // search.getPosts,
  // );
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    ['posts', { ...searchState, pageParam: 1 }],
    search.getPosts,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 1) return pages.length + 1;
        else return undefined;
      },
    },
  );
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    hasNextPage && isIntersecting && !isFetchingNextPage ? fetchNextPage() : null;
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error}</p>
  ) : (
    <Styled.container>
      {console.log('what is pages', data?.pages)}

      {data?.pages.map((post: PostEntity) => {
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

      {/* {data?.pages.map((group, index) => {
        return (
          <React.Fragment key={index}>
            {group.data.map((post: PostEntity) => (
              <PostCard
                key={post.postId}
                postEntity={post}
                setClickedPostId={() => {
                  return;
                }}
              />
            ))}
          </React.Fragment>
        );
      })} */}
      {hasNextPage ? <div ref={setTarget}>load more...</div> : <></>}
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </Styled.container>
  );
};
export default PostList;
