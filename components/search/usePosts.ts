import post from '@lib/api/post';
import { useInfiniteQuery, useQuery } from 'react-query';
import { HashtagResponseDto } from 'types/response';
import { SearchStateType } from './context';

export const usePosts = (searchState: SearchStateType) => {
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
  return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status };
};

export const useHashtag = () => {
  const { data, status } = useQuery<HashtagResponseDto[]>(
    ['hashtags'],
    async () => (await post.getSearchHashtags()).data,
  );
  console.log('hashtags', data);
  return { hashtags: data, status };
};
