import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalThemeProvider from '../styles/GlobalThemeProvider';
import Content from '@components/layout/Content';
import theme from '../styles/theme';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider theme={theme}>
        <Header />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
