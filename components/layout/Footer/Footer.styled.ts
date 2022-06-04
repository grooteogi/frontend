import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  footer: styled.footer`
    width: 100%;
    height: auto;
    position: relative;
    bottom: 0;
    background: ${theme.color.deepdarkgray};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  paragraph: styled.div`
    color: ${theme.color.white};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 2rem auto;
    ${theme.responsive.pc} {
      width: 1060px;
    }
    ${theme.responsive.tablet} {
      width: 80%;
    }
    ${theme.responsive.mobile} {
      width: 90%;
    }
  `,
  textline: styled.p`
    font-size: ${theme.fontSize.xxs};
  `,
};

export default Styled;
