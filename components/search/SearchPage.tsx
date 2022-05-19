import React, { useRef, useState } from 'react';
import Content from '@components/layout/Content';
import useOnScreen from '@hooks/useOnScreen';
import Layout from './layout';
import SearchInputs from './SearchInputs/SearchInputs';
import PostList from './PostList/PostList';
import PageCarousel from './PageCarousel/PageCarousel';
import { SearchProvider } from './context';

const SearchPage = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(bottomRef);

  // const { data: PostEntity } = useQuery(['posts', SearchContext.state], search.getPosts, { enabled: !!SearchContext });
  // const result = useQueries([
  //   {
  //     queryKey: ['hashtags'],
  //     queryFn: () => {
  //       search.getHashtags();
  //     },
  //   },
  //   {
  //     queryKey: ['posts'],
  //     queryFn: () => {
  //       search.getPosts(SearchContext.state);
  //     },
  //   },
  // ]);
  return (
    <SearchProvider>
      <Content>
        <Layout.PageCarousel>
          <PageCarousel />
        </Layout.PageCarousel>
        <Layout.PageSearch>
          <SearchInputs />
        </Layout.PageSearch>
        <Layout.PagePosts>
          <PostList />
        </Layout.PagePosts>
        <div ref={bottomRef}>load more...</div>
      </Content>
    </SearchProvider>
  );
};
export default SearchPage;
