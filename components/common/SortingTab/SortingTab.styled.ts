import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const getFont = ({ active = false }) => {
  return css`
    font-weight: ${active ? theme.weight.medium : theme.weight.regular};
    color: ${active ? theme.color.black : theme.color.gray700};
  `;
};

const getPadding = () => {
  return css`
    ${theme.responsive.pc} {
      padding: 0 16px;
    }
    ${theme.responsive.tablet} {
      padding: 0 16px;
    }
    ${theme.responsive.mobile} {
      padding: 0 8px;
    }
  `;
};

export const Styled = {
  container: styled.div`
    display: flex;
    width: fit-content;
    & :last-child {
      border-right: 0px;
    }
    & :first-of-type {
      padding: 0 16px 0 8px;
      ${theme.responsive.mobile} {
        padding: 0 8px 0 0;
      }
    }
  `,
  item: styled.span`
    ${getFont};
    ${getPadding};
    font-size: 1rem;
    border-right: 1px solid ${theme.color.gray200};
    &:hover {
      cursor: pointer;
    }
  `,
};
