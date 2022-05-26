import Layout from '@components/search/layout';
import SearchInput from '@components/search/SearchInput/SearchInput';
import PostList from '@components/search/PostList/PostList';
import PageCarousel from '@components/search/PageCarousel/PageCarousel';
import { SearchProvider } from '@components/search/context';
import SearchMenu from '@components/search/SearchMenu';

const SearchPage = () => {
  return (
    <>
      <Layout.PageCarousel>
        <PageCarousel />
      </Layout.PageCarousel>
      <SearchProvider>
        <Layout.PageSearch>
          <SearchInput />
        </Layout.PageSearch>
        <Layout.PageMenu>
          <SearchMenu />
        </Layout.PageMenu>
        <Layout.PagePosts>
          <PostList />
        </Layout.PagePosts>
      </SearchProvider>
    </>
  );
};

export default SearchPage;
