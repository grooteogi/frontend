import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const getFont = ({ active = false }) => {
  return css`
    font-weight: ${active ? theme.weight.medium : theme.weight.regular};
    color: ${active ? theme.color.black : theme.color.gray700};
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
