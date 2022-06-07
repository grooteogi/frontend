import React from 'react';
import Styled from './SearchList.styled';
import { useSearchContext } from '../context';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import PostSkeleton from '@components/common/PostCard/PostSkeleton';
import PostCard from '@components/common/PostCard';
import { PostEntity } from 'types/entity';
import { useRouter } from 'next/router';
import { usePosts } from '../usePosts';

const SearchList = () => {
  const router = useRouter();
  const searchState = useSearchContext();

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = usePosts(searchState);

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) =>
    hasNextPage && isIntersecting && !isFetchingNextPage ? fetchNextPage() : null;

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return status === 'loading' ? (
    <Styled.container>
      <PostSkeleton />
    </Styled.container>
  ) : status === 'error' ? (
    <p>Error: {error}</p>
  ) : (
    <Styled.container>
      {data?.pages.map((page: { posts: PostEntity[] }, index: number) => {
        return (
          <React.Fragment key={index}>
            {page.posts.map((post: PostEntity) => (
              <PostCard
                key={post.postId}
                post={post}
                onClick={() => router.push({ pathname: '/post/[postId]', query: { postId: post.postId } })}
              />
            ))}
          </React.Fragment>
        );
      })}
      {hasNextPage ? <div ref={setTarget}></div> : null}
      {isFetching && !isFetchingNextPage ? <div>Fetching…</div> : null}
    </Styled.container>
  );
};
export default SearchList;
