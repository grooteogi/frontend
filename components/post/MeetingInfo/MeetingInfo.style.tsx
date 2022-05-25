import Typography from '@components/common/Typography';
import styled from '@emotion/styled';
import theme from '@styles/theme';

interface SizeProps {
  isWidthBigger: boolean;
}

const getSize = ({ isWidthBigger }: SizeProps) => {
  if (isWidthBigger) {
    return `max-width: 100%;
    height: auto;`;
  }
  return `max-height: 100%;
    width: auto;`;
};

export const Styled = {
  container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 1rem;
    padding-bottom: 50px;
  `,
  thumbnailWrappper: styled.div`
    width: 100%;
    background-color: white;
    border-radius: ${theme.borderRadius.md};
  `,
  thumbnail: styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
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
  postPicWrapper: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: translate(50%, 50%);
    -ms-transform: translate(50%, 50%);
    transform: translate(50%, 50%);
  `,
  postPic: styled.img`
    position: absolute;
    top: 0;
    left: 0;
    ${getSize};
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
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
    }
  `,
};

export default Styled;
