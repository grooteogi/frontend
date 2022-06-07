import theme from '@styles/theme';
import styled from '@emotion/styled';

const Layout = {
  PageContainer: styled.div`
    ${theme.responsive.tablet} {
      width: 100%;
      padding: 0 2vw;
    }
    ${theme.responsive.mobile} {
      padding: 0 3vw;
      width: 100%;
    }
  `,
  PageTitle: styled.div`
    padding: 20px 0;
    border-bottom: 1px solid ${theme.color.gray200};
    margin-bottom: 2rem;
  `,
  PageContent: styled.article`
    display: flex;
    flex-direction: row;
    gap: 10%;
    flex-wrap: wrap;
    height: auto;
    min-height: calc(100vh - 80px - 7.225rem);
    ${theme.responsive.tablet} {
      flex-direction: column;
      width: 100%;
      padding: 0 2vw;
      min-height: calc(100vh - 100px - 7.225rem);
    }
    ${theme.responsive.mobile} {
      flex-direction: column;
      width: 100%;
      padding: 0 3vw;
      min-height: calc(87vh - 7.225rem);
    }
  `,
  SectionLeft: styled.section`
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    ${theme.responsive.tablet} {
      width: 100%;
    }
    ${theme.responsive.mobile} {
      width: 100%;
    }
  `,
  SectionRight: styled.section`
    width: 50%;
    ${theme.responsive.tablet} {
      width: 100%;
    }
    ${theme.responsive.mobile} {
      width: 100%;
    }
  `,
};

export default Layout;
