import * as React from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Styled = {
  content: styled.main`
    margin: 0 auto 0;
    @media (min-width: 1060px) {
      width: 1060px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 767px;
    }
    @media (max-width: 767px) {
      width: 390px;
    }
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
