import styled from '@emotion/styled';
import theme from '@styles/theme';

const Styled = {
  aside: styled.aside`
    width: 200px;
    ${theme.responsive.tablet} {
      width: 100%;
    }
    ${theme.responsive.mobile} {
      width: 100%;
    }
  `,
  nav: styled.nav`
    width: 100%;
  `,
  h3: styled.h3`
    font-size: ${theme.fontSize.lg};
  `,
  ul: styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    background: ${theme.color.white};
  `,
  li: styled.li`
    font-size: ${theme.fontSize.sm};
    padding: 1.5rem 0;
    border-bottom: 1px solid ${theme.color.gray400};
    cursor: pointer;
    &:first-of-type {
      font-weight: ${theme.weight.bold};
      border-bottom: 2.5px solid ${theme.color.gray400};
      line-height: 1.2;
      padding-bottom: 12px;
    }
    &:last-child {
      border-bottom: 0;
    }
  `,
};

export default Styled;
