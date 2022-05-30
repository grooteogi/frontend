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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    align-items: center;
    column-gap: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  `,
  img: styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${theme.borderRadius.md};
  `,
};

export default Styled;
