import * as React from 'react';
import styled from '@emotion/styled';

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

const Content = ({ children }: LayoutProps) => {
  return (
    <>
      <Styled.content>{children}</Styled.content>
    </>
  );
};

export default Content;
