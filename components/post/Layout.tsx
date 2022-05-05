import * as React from 'react';
import styled from '@emotion/styled';
import Header from '@components/common/Header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Styled = {
  content: styled.main`
    margin: 60px auto 0;
    padding: 0 5%;
    max-width: 1060px;
  `,
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header device={'sm'}></Header>
      <Styled.content>{children}</Styled.content>
    </>
  );
};

export default Layout;
