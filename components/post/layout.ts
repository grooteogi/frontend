import styled from '@emotion/styled';
import theme from '@styles/theme';

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

    height: auto;
    min-height: calc(100vh - 80px - 7.225rem);
    ${theme.responsive.tablet} {
      width: 100%;
      padding: 0 2vw;
      min-height: calc(100vh - 100px - 7.225rem);
    }
    ${theme.responsive.mobile} {
      width: 100%;
      padding: 0 3vw;
      min-height: calc(87vh - 7.225rem);
    }
  `,
};

export default Layout;
