import React from 'react';
import Styled from './SearchList.styled';
import PostCard from '@components/common/PostCard';
import { useSearchContext } from '../context';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { CreditType } from 'types/enum';
import { PostEntity } from 'types/entity';
import PostSkeleton from '@components/common/PostCard/PostSkeleton';
import search from '@lib/api/search';

const SearchList = () => {
  const searchState = useSearchContext();

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    search.useInfinitePost(searchState);

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
      {data?.pages.map((page, index) => {
        return (
          <React.Fragment key={index}>
            {page?.data.posts.map((post: PostEntity) => (
              // {page?.map((post: PostEntity) => (
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
