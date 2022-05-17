import { SearchProvider } from '@components/search/context';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const SearchPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <SearchPage />
      </SearchProvider>
    </QueryClientProvider>
  );
};

export default SearchPage;
