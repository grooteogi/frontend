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
  inputListBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px 0;
  `,
  inputListItem: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  heatBox: styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
  `,
  //in edit grid
  container: styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(10, minmax(30px, auto));
    place-items: center stretch;
    place-content: start space-between;
    row-gap: 15px;
  `,
  name: styled.div`
    grid-column: 1 / span 1;
  `,
  inputs: styled.div`
    grid-column: 2 / span 1;
  `,
  complete: styled.div`
    grid-row: 6 / span 1;
    grid-column: 3 / span 1;
    place-self: stretch end;
  `,
  footer: styled.div`
    grid-column: 1 / span 3;
    display: flex;
    justify-content: space-between;
  `,
};

export default Layout;
