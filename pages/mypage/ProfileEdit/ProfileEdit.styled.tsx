import styled from '@emotion/styled';

const Styled = {
  container: styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(10, minmax(30px, auto));
    place-items: center stretch;
    place-content: start space-between;
    row-gap: 15px;
  `,
  name: styled.div`
    grid-column: 1 / span 1;
  `,
  inputs: styled.div`
    grid-column: 2 / span 1;
  `,
  complete: styled.div`
    grid-row: 6 / span 1;
    grid-column: 3 / span 1;
    place-self: stretch end;
  `,
  footer: styled.div`
    grid-column: 1 / span 3;
    display: flex;
    justify-content: space-between;
  `,
};

export default Styled;
