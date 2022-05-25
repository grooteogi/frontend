import styled from '@emotion/styled';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Styled = {
  container: styled.article`
    background-color: white;
  `,
  content: styled.div`
    @media (min-width: 1060px) {
      display: grid;
      max-width: 1060px;
      grid-template-columns: auto 375px;
      gap: 25px;
    }
    @media (max-width: 1059px) {
      display: flex;
      flex-direction: column;
      row-gap: 50px;
    }
  `,
};

const Layout = ({ children }: LayoutProps) => {
  return <Styled.content>{children}</Styled.content>;
};

export default Layout;
