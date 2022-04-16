import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalThemeProvider from '../styles/GlobalThemeProvider';
import theme from '../styles/theme';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider theme={theme}>
        <Component {...pageProps} />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
