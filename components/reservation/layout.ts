import theme from '@styles/theme';
import styled from '@emotion/styled';

const Layout = {
  PageTitle: styled.div`
    padding: 20px 0;
    border-bottom: 1px solid ${theme.style.lightgrey};
    margin-bottom: 2rem;
  `,
  PageContent: styled.article`
    display: flex;
    flex-wrap: wrap;
  `,
  SectionLeft: styled.section`
    width: 50%;
    background-color: pink;
  `,
  SectionRight: styled.section`
    width: 50%;
    background-color: blue;
  `,
};

export default Layout;
