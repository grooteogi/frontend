import Typography from '@components/common/Typography';
import styled from '@emotion/styled';

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
    row-gap: 50px;
    padding-bottom: 50px;
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
  thumbnailWrappper: styled.div`
    width: 100%;
    background-color: lightgray;
    border-radius: 8px;
  `,
  thumbnail: styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
  `,
  imgSelectBox: styled.label`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
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
  `,
  content: styled(Typography)`
    line-height: 1.4rem;
  `,
};

export default Styled;
