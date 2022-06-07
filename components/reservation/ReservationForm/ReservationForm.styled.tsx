import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    ${theme.responsive.tablet} {
      padding: 0 1rem;
    }
  `,
  checkboxContainer: styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  `,
  inputContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  `,
  innerContainer: styled.div`
    display: flex;
    column-gap: 1rem;
  `,
};

export default Styled;
