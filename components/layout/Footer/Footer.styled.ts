import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  footer: styled.footer`
    width: 100vw;
    height: 10vh;
    position: relative;
    bottom: 0px;
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
    margin: 2rem;
    @media (min-width: 1060px) {
      width: 1060px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 767px;
    }
    @media (max-width: 767px) {
      width: 390px;
    }
  `,
  textline: styled.p`
    font-size: ${theme.fontSize.xxs};
  `,
};

export default Styled;
