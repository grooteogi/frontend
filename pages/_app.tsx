import type { AppProps } from 'next/app';
import GlobalThemeProvider from '../styles/GlobalThemeProvider';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider theme={theme}>
      <Component {...pageProps} />
    </GlobalThemeProvider>
  );
}

export default MyApp;
