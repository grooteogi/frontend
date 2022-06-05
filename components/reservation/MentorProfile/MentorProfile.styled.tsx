import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 132px;
    gap: 15px;
    align-items: center;
    ${theme.responsive.mobile} {
      flex-direction: column;
      justify-content: flex-start;
      gap: 25px;
      height: auto;
    }
  `,
  image: styled.div`
    width: 132px;
    height: 132px;
  `,
  info: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  `,
  title: styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
  `,
  hash: styled.div`
    display: flex;
    column-gap: 6px;
  `,
};

export default Styled;
