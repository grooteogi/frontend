import styled from '@emotion/styled';
import theme from '@styles/theme';

const Layout = {
  container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(90vh - 7.225rem);
    ${theme.responsive.tablet} {
      margin: 4vh 0 8vh 0;
      height: calc(80vh - 7.225rem);
      align-items: center;
    }
    ${theme.responsive.mobile} {
      margin: 2vh 0 10vh 0;
      height: calc(80vh - 7.225rem);
      align-items: flex-start;
    }
  `,
};

export default Layout;
