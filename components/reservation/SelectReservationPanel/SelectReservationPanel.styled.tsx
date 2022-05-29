import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  `,
  scrollContainer: styled.div`
    width: 100%;
    max-height: 411px;

    display: flex;
    flex-direction: column;
    padding: 0 24px;

    overflow-y: auto;
  `,
  itemContainer: styled.div`
    width: 100%;

    display: flex;
    margin-top: 1.75rem;
    padding-bottom: 1.5rem;
    column-gap: 1rem;

    border-bottom: 1px solid ${theme.color.gray200};
  `,
};

export default Styled;
