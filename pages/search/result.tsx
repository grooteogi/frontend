import Layout from '@components/search/layout';
import SearchInput from '@components/search/SearchInput';
import SearchList from '@components/search/SearchList';
import { SearchProvider } from '@components/search/context';
import SearchFiltering from '@components/search/SearchFiltering';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import post from '@lib/api/post';

const Search = () => {
  return (
    <SearchProvider>
      <Layout.container>
        <Layout.search>
          <SearchInput />
        </Layout.search>
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

export const getServerSideProps: GetServerSideProps = async context => {
  const searchKeyword = context.query.searchKeyword as string;

  console.log('searchKeyword', searchKeyword);
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    ['posts'],
    async ({ pageParam = 1 }) =>
      (
        await post.search({
          searchState: {
            hashtag: '',
            keyword: searchKeyword,
            sort: '',
            region: '',
          },
          pageParam,
        })
      ).data,
    { staleTime: 1000 },
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
export default Search;
