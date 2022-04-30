import { StyledButton } from '@components/Button/style';
import styled from '@emotion/styled';

export const Styled = {
  container: styled.div`
    @media (min-width: 1060px) {
      width: 325px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    border: 1px solid lightgrey;
    border-radius: 12px;
    padding: 2rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  hr: styled.hr`
    color: lightgray;
    width: 100%;
  `,
  likedBtn: styled.button`
    width: 30px;
    height: 30px;
    border: darkgray;
    padding: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  bottom: styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  `,
};

export default Styled;
