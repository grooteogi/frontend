import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Styled = {
  container: styled.div`
    border: 1px solid ${theme.color.gray200};
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 99;
    height: fit-content;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    top: 20vh;
    ${theme.responsive.pc} {
      left: 35vw;
      width: 30vw;
    }
    ${theme.responsive.tablet} {
      left: 20vw;
      width: 60vw;
    }
    ${theme.responsive.mobile} {
      left: 10vw;
      width: 80vw;
    }
  }
  `,
  header: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
