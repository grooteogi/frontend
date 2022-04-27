import styled from '@emotion/styled';

interface SizeProps {
  isWidthBigger: boolean;
}

const getSize = ({ isWidthBigger }: SizeProps) => {
  if (isWidthBigger)
    return `max-width: 100%;
    height: auto;`;
  return `max-height: 100%;
      width: auto;);`;
};

export const Styled = {
  container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 1rem;
  `,
  thumbnailWrappper: styled.div`
    width: 100%;
    background-color: white;
  `,
  thumbnail: styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
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
    /* max-width: 100%;
    height: auto; */
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
};

export default Styled;
