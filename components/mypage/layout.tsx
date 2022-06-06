import theme from '@styles/theme';
import styled from '@emotion/styled';

interface SidebarProps {
  isOpen?: boolean;
}

const isSideOpenHamburger = ({ isOpen }: SidebarProps) => {
  if (isOpen) {
    console.log('isSideOpenHamburger');
    return `
      ${theme.responsive.tablet}{
        position: fixed;
        right: 2vw;
        z-index: 3;
      }
      ${theme.responsive.mobile}{
        position: fixed;
        right: 10px;
        z-index: 3;
      }
    `;
  }
};

const isSideOpenSection = ({ isOpen }: SidebarProps) => {
  if (isOpen) {
    return `
    ${theme.responsive.tablet} {
        position: fixed;
        height: 100%;
        right: 0;
        width: 85vw;
        background-color: white;
        padding: 30px 2vw 30px 4vw;
        z-index: 3;
        border: 1px solid ${theme.color.gray100};
      }
      ${theme.responsive.mobile} {
        position: fixed;
        height: 100%;
        right: 0;
        width: 80vw;
        background-color: white;
        -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
        transition: width 5s, height 2s, background-color 2s, transform 2s;
        padding: 3vh 5vw;
        box-shadow: 0 0 0 5px 5px ${theme.color.black};
        z-index: 3;
        border: 1px solid ${theme.color.gray100};
      }

    `;
  } else {
    return `
    ${theme.responsive.tablet} {
      display: none;
    }
    ${theme.responsive.mobile} {
      display: none;
    }
    `;
  }
};

const Layout = {
  PageContent: styled.article`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  `,
  SectionLeft: styled.section<SidebarProps>`
    width: 25%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    ${isSideOpenSection};
  `,
  SectionRight: styled.section`
    width: 75%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    ${theme.responsive.tablet} {
      width: 100%;
      padding: 0 2vw;
      height: calc(80vh - 7.225rem);
    }
    ${theme.responsive.mobile} {
      width: 100%;
      padding: 0 3vw;
      height: calc(87vh - 7.225rem);
      max-height: fit-content;
    }
  `,
  PageTitle: styled.div`
    padding: 30px 0;
    border-bottom: 1px solid ${theme.color.gray700};
    height: 87px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  hamburgerBox: styled.span<SidebarProps>`
    ${theme.responsive.pc} {
      display: none;
    }
    ${isSideOpenHamburger};
  `,
  listWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  myPageItem: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    & :hover {
      cursor: pointer;
    }
    z-index: 2;
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
