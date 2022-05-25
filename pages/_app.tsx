import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalThemeProvider from '../styles/GlobalThemeProvider';
import Content from '@components/layout/Content';
import theme from '../styles/theme';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider theme={theme}>
        {/* <Header device={'md'} /> */}

        <Content>
          <Component {...pageProps} />
        </Content>
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
