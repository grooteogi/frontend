import styled from '@emotion/styled';

export const Styled = {
  container: styled.section`
    display: grid;
    width: 390px;
    height: 132px;
    grid-template-columns: 132px 235px;
    column-gap: 23px;
    align-items: center;
    justify-items: start;
  `,
  image: styled.div`
    grid-row: 1 / span 5;
    grid-column: 1/2;
  `,
  title: styled.div`
    padding-bottom: 8px;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `,
  hash: styled.div`
    display: flex;
    column-gap: 6px;
  `,
  detail: styled.div``,
};
