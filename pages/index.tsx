import Layout from '@components/search/layout';
import SearchInputs from '@components/search/SearchInputs/SearchInputs';
import PostList from '@components/search/PostList/PostList';
import PageCarousel from '@components/search/PageCarousel/PageCarousel';
import { SearchProvider } from '@components/search/context';

const SearchPage = () => {
  return (
    <SearchProvider>
      <Layout.PageCarousel>
        <PageCarousel />
      </Layout.PageCarousel>
      <Layout.PageSearch>
        <SearchInputs />
      </Layout.PageSearch>
      <Layout.PagePosts>
        <PostList />
      </Layout.PagePosts>
    </SearchProvider>
  );
};

export default SearchPage;
