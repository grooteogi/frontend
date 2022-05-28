import React from 'react';
import Styled from './SearchList.styled';
import PostCard from '@components/common/PostCard';
import search from '@lib/api/search';
import { useSearchContext } from '../context';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { CreditType } from 'types/enum';
import { PostEntity } from 'types/entity';
import post from '@lib/api/post';
import PostSkeleton from '@components/common/PostCard/PostSkeleton';
import { Grid } from '@mui/material';

const SearchList = () => {
  const searchState = useSearchContext();
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    ['posts', searchState],
    ({ pageParam = 1 }) => search.getPosts({ searchState, pageParam }),
    // ({ pageParam = 1 }) => post.search({ searchState, pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 2) return pages.length + 1;
        else return undefined;
      },
    },
  );
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) =>
    hasNextPage && isIntersecting && !isFetchingNextPage ? fetchNextPage() : null;

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return status === 'loading' ? (
    // <p>Loading...</p>
    <Styled.container>
      {Array.from(new Array(12)).map(() => (
        <PostSkeleton />
      ))}
    </Styled.container>
  ) : status === 'error' ? (
    <p>Error: {error}</p>
  ) : (
    <Styled.container>
      {console.log('what is data?, ', data)}
      {data?.pages.map((page, index) => {
        return (
          <React.Fragment key={index}>
            {console.log('what is page?, ', page)}
            {page.map((post: PostEntity) => (
              // {page.data.posts.map((post: PostEntity) => (
              <PostCard
                key={post.postId}
                postEntity={{
                  ...post,
                  hashtags: ['개발자취업', '포트폴리오', '샘플태그'],
                  createAt: '',
                  creditType: CreditType.DIRECT,
                  likes: {
                    liked: true,
                    count: 10,
                  },
                  mentor: { userId: 1, nickname: 'mentor nickname', imageUrl: '' },
                }}
                setClickedPostId={() => undefined}
              />
            ))}
          </React.Fragment>
        );
      })}
      {hasNextPage ? <div ref={setTarget}>load more...</div> : null}
      {isFetching && !isFetchingNextPage ? <div>Fetching...</div> : null}
    </Styled.container>
  );
};
export default SearchList;
