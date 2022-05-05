import Typography from '@components/common/Typography';
import styled from '@emotion/styled';

export const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 100%;
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
    height: 100%;
  `,
  hr: styled.hr`
    color: gray;
    width: 100%;
    margin-top: 25px;
  `,
  text: styled(Typography)`
    line-height: 1.4;
  `,
};

export default Styled;
