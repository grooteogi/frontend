import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.gray200};
    border: 2px dashed ${theme.color.gray600};
    border-radius: ${theme.borderRadius.md};
  `,
  labelContainer: styled.label`
    display: flex;

    align-items: center;
    column-gap: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  `,
};

export default Styled;
