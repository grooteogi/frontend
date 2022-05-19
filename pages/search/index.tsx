import React, { useRef } from 'react';
import Content from '@components/layout/Content';
import { SearchProvider } from '@components/search/context';
import Layout from '@components/search/layout';
import PageCarousel from '@components/search/PageCarousel/PageCarousel';
import PostList from '@components/search/PostList/PostList';
import SearchInputs from '@components/search/SearchInputs/SearchInputs';
import useOnScreen from '@hooks/useOnScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const SearchPage = () => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(bottomRef);
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default SearchPage;
