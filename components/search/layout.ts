import styled from '@emotion/styled';
import theme from '@styles/theme';

const Layout = {
  container: styled.main`
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
  carousel: styled.div``,
  search: styled.section``,
  menu: styled.section``,
  filter: styled.section``,
  posts: styled.article``,
};

export default Layout;
