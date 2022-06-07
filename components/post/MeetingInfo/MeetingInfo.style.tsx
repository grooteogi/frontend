import Typography from '@components/common/Typography';
import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Styled = {
  container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 0 50px;
  `,
  postPic: styled.img`
    width: 100%;
    background-color: white;
    border: 1px solid ${theme.color.gray200};
    border-radius: ${theme.borderRadius.md};
    object-fit: cover;
    aspect-ratio: 1/1;
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
  likedPanel: styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  `,
  userPic: styled.img`
    width: 22px;
    height: 22px;
    object-fit: cover;
    border-radius: 50%;
    background-color: gray;
  `,
  creditText: styled(Typography)`
    padding: 0 1rem;
    border-left: 1px solid #d1d1d1;
  `,
  bottomButtonBox: styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 7px;
  `,
  bottomButton: styled.button`
    background-color: ${theme.color.gray200};
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: ${theme.borderRadius.sm};
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  `,
};

export default Styled;
