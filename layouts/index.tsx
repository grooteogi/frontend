import * as React from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Content = styled.div`
  margin: 60px auto 0;
  padding: 0 5%;
  max-width: 1060px;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Content>
        <main>{children}</main>
      </Content>
    </>
  );
};

export default Layout;
