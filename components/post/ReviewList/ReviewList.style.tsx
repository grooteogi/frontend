import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import styled from '@emotion/styled';

export const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  itemBox: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  `,
  profileImg: styled.img`
    width: 47px;
    height: 47px;
    border-radius: 50%;
    object-fit: none;
  `,
  userTimeBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 47px;
  `,
  title: styled(Typography)`
    font-size: 1.2rem;
    font-weight: 600;
  `,
  hr: styled.hr`
    color: gray;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  `,
  text: styled(Typography)`
    line-height: 1.4;
  `,
};

export default Styled;
