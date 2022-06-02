import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.div`
    display: grid;
    ${theme.responsive.pc} {
      grid-template-columns: repeat(4, 1fr);
    }
    ${theme.responsive.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
    ${theme.responsive.mobile} {
      grid-template-columns: repeat(2, 1fr);
    }
    row-gap: 30px;
    place-items: center center;
    justify-content: space-evenly;
  `,
};

export default Styled;
