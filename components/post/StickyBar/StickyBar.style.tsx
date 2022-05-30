import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Styled = {
  container: styled.div`
    display: flex;
    background-color: ${theme.color.darkgray};
    flex-direction: row-reverse;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 5;
    padding: 0 10%;
    @media screen and (min-width: 768px) {
      padding: 0 20%;
    }
    @media screen and (min-width: 1060px) {
      padding: 0 20% 0 60%;
    }
  `,
};

export default Styled;
