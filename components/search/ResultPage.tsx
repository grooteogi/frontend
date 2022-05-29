import Layout from '@components/search/layout';
import SearchInput from '@components/search/SearchInput/SearchInput';
import SearchList from '@components/search/SearchList/SearchList';
import { SearchProvider } from '@components/search/context';
import SearchMenu from '@components/search/SearchMenu';
import SearchFiltering from '@components/search/SearchFiltering/SearchFiltering';

const ResultPage = () => {
  return (
    <Layout.container>
      <SearchProvider>
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
      </SearchProvider>
    </Layout.container>
  );
};

export default ResultPage;
