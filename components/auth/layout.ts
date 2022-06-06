import styled from '@emotion/styled';
import theme from '@styles/theme';

const Layout = {
  container: styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0 20vh 0;
    ${theme.responsive.tablet} {
      margin: 1rem 0 10vh 0;
      height: calc(80vh - 7.225rem);
      display: flex;
      align-items: center;
    }
    ${theme.responsive.mobile} {
      margin: 1rem 0 10vh 0;
      height: calc(80vh - 7.225rem);
      display: flex;
      align-items: flex-start;
    }
  `,
};

export default Layout;
