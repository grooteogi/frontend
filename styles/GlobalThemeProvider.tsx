import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Theme from './theme';
import { globalStyle } from './GlobalStyle';

const GlobalThemeProvider: React.FC<{ theme: typeof Theme }> = ({ theme, children }) => {
  return (
    <>
      {globalStyle}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalThemeProvider;
