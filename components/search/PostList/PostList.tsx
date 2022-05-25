import React from 'react';
import Styled from './PostList.styled';
import PostCard from '@components/common/PostCard';
import { PostEntity } from 'types/fetchedData';
import search from '@lib/api/search';
import { useSearch } from '../context';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { CreditType } from 'types/entity';

const PostList = () => {
  const { searchState } = useSearch();
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    ['posts', searchState],
    ({ pageParam = 1 }) => search.getPosts({ ...searchState, pageParam }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 2) return pages.length + 1;
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
      {data?.pages.map((group, index) => {
        return (
          <React.Fragment key={index}>
            {group.map((post: PostEntity) => (
              <PostCard
                key={post.postId}
                postEntity={{
                  ...post,
                  hashtags: [
                    {
                      hashtagId: 7,
                      name: '개발자취업',
                    },
                    { hashtagId: 8, name: '포트폴리오' },
                    { hashtagId: 9, name: '샘플태그' },
                  ],
                  createAt: '',
                  creditType: CreditType.DIRECT,
                  likes: true,
                  mentor: { userId: 1, nickname: 'mentor nickname', imageUrl: '' },
                  schedules: [],
                  reviews: [],
                }}
                setClickedPostId={() => undefined}
              />
            ))}
          </React.Fragment>
        );
      })}
      {hasNextPage ? <div ref={setTarget}>load more...</div> : <></>}
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </Styled.container>
  );
};
export default PostList;
