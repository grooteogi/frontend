import Content from '@components/layout/Content';
import Layout from './layout';
import SearchInputs from './SearchInputs/SearchInputs';
import PostList from './PostList/PostList';
import PageCarousel from './PageCarousel/PageCarousel';
import { SearchProvider } from './context';

const SearchPage = () => {
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
      </Content>
    </SearchProvider>
  );
};
export default SearchPage;
