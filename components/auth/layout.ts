import styled from '@emotion/styled';
import theme from '@styles/theme';

const Layout = {
  container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(90vh - 7.225rem);
    margin: 2vh 0 6vh 0;
    height: auto;
    ${theme.responsive.tablet} {
      margin: 4vh 0 8vh 0;
      min-height: calc(80vh - 7.225rem);
      height: auto;
      align-items: center;
    }
    ${theme.responsive.mobile} {
      margin: 2vh 0 10vh 0;
      min-height: calc(80vh - 7.225rem);
      height: fit-content;
      align-items: flex-start;
    }
  `,
};

export default Layout;
