import theme from '@styles/theme';
import styled from '@emotion/styled';

const Layout = {
  PageContent: styled.article`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  `,
  SectionLeft: styled.section`
    flex-grow: 2;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  `,
  SectionRight: styled.section`
    flex-grow: 7;
  `,
  PageTitle: styled.div`
    padding: 30px 0;
    border-bottom: 1px solid ${theme.color.gray700};
    margin-bottom: 2rem;
  `,
  listWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  myPageItem: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `,
};

export default Layout;
