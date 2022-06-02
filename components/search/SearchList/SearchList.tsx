import React from 'react';
import Styled from './SearchList.styled';
import { useSearchContext } from '../context';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import post from '@lib/api/post';
import PostSkeleton from '@components/common/PostCard/PostSkeleton';
import PostCard from '@components/common/PostCard';
import { PostEntity } from 'types/entity';
import { useInfiniteQuery } from 'react-query';
import { useRouter } from 'next/router';

const SearchList = () => {
  const router = useRouter();
  const searchState = useSearchContext();
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    ['posts', searchState],
    async ({ pageParam = 1 }) => (await post.search({ searchState, pageParam })).data,
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === undefined) return undefined;
        else return allPages.length < lastPage.pageCount && allPages.length + 1;
      },
    },
  );

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
                post={{
                  ...post,
                  hashtags: ['개발자취업', '포트폴리오', '샘플태그'],
                }}
                onClick={() => router.push({ pathname: '/post/[postId]', query: { postId: post.postId } })}
              />
            ))}
          </React.Fragment>
        );
      })}
      {hasNextPage ? <div ref={setTarget}>load more…</div> : null}
      {isFetching && !isFetchingNextPage ? <div>Fetching…</div> : null}
    </Styled.container>
  );
};
export default SearchList;
