import styled from '@emotion/styled';

export const Styled = {
  container: styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 132px;
    gap: 15px;
    align-items: center;
  `,
  info: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    column-gap: 23px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  `,
  image: styled.div`
    width: 132px;
    height: 132px;
  `,
  title: styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
  `,
  hash: styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  `,
};
