import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.div`
    display: grid;
    place-items: center center;
    justify-content: space-evenly;
    ${theme.responsive.pc} {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 30px;
    }
    ${theme.responsive.tablet} {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 30px;
    }
    ${theme.responsive.mobile} {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 10px;
    }
  `,
};

export default Styled;
