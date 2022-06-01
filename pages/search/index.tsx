import Layout from '@components/search/layout';
import SearchInput from '@components/search/SearchInput';
import SearchList from '@components/search/SearchList';
import { SearchProvider } from '@components/search/context';
import SearchMenu from '@components/search/SearchMenu';
import PageCarousel from '@components/search/PageCarousel';
import SearchFiltering from '@components/search/SearchFiltering';

const Search = () => {
  return (
    <SearchProvider>
      <Layout.container>
        <Layout.carousel>
          <PageCarousel />
        </Layout.carousel>
        <Layout.search>
          <SearchInput />
        </Layout.search>
        <Layout.menu>
          <SearchMenu />
        </Layout.menu>
        <Layout.filter>
          <SearchFiltering />
        </Layout.filter>
        <Layout.posts>
          <SearchList />
        </Layout.posts>
      </Layout.container>
    </SearchProvider>
  );
};

export default Search;
