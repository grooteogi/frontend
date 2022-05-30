import styled from '@emotion/styled';

const Layout = {
  container: styled.div`
    margin: 25px auto 0;
    padding-bottom: 100px;
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

export default Layout;
