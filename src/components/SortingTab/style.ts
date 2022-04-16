import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../styles/theme';

const typoTheme = theme.style.sortingTab;

const getFont = ({ active = false }) => {
  const font = typoTheme.font;
  if (active)
    return css`
      font-weight: ${font.selected.weight};
      color: ${font.selected.color};
    `;
  else
    return css`
      font-weight: ${font.basic.weight};
      color: ${font.basic.color};
    `;
};

export const StyledSortingTabBox = styled.div`
  display: flex;
  width: fit-content;
  & :last-child {
    border-right: 0px;
  }
`;

export const StyledSortingTab = styled.span`
  ${getFont};
  font-size: 1rem;
  padding: 0 1rem;
  border-right: 1px solid #d1d1d1;
`;
