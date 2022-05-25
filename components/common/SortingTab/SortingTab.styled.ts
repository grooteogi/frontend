import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const getFont = ({ active = false }) => {
  if (active)
    return css`
      font-weight: ${theme.weight.medium};
      color: ${theme.color.black};
    `;
  else
    return css`
      font-weight: ${theme.weight.regular};
      color: ${theme.color.gray200};
    `;
};

export const Styled = {
  container: styled.div`
    display: flex;
    width: fit-content;
    & :last-child {
      border-right: 0px;
    }
  `,
  item: styled.span`
    ${getFont};
    font-size: 1rem;
    padding: 0 1rem;
    border-right: 1px solid ${theme.color.gray200};
    &:hover {
      cursor: pointer;
    }
  `,
};
