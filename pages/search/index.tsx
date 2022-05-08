import { QueryContextProvider } from '@components/search/context';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const SearchPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryContextProvider>
        <SearchPage />
      </QueryContextProvider>
    </QueryClientProvider>
  );
};

export default SearchPage;
