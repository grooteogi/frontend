import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '../../../styles/theme';

export interface RemovableProps {
  removable?: boolean;
}

export interface ClickableProps {
  clickable?: boolean;
}

const hashtagTheme = theme.style.hashtag;

const getClickEffect = ({ clickable }: ClickableProps) => {
  const hashtagTheme = theme.style.hashtag;
  if (clickable)
    return css`
      &:hover {
        background: ${darken(0.01, `${hashtagTheme.color.white}`)};
        cursor: pointer;
      }
      &:active {
        background: ${darken(0.05, `${hashtagTheme.color.white}`)};
        cursor: pointer;
      }
    `;
};

export const StyledButton = styled.div<ClickableProps>`
  ${getClickEffect};
  background-color: ${hashtagTheme.color.white};
  border: 1px solid ${hashtagTheme.borderColor.primary};
  color: ${hashtagTheme.fontColor.black};
  font-size: 1rem;
  border-radius: 4px;
  padding: 8px 12px;
`;

const getRemoveButton = ({ removable }: RemovableProps) => {
  return css`
    display: ${removable ? 'inline' : 'none'};
  `;
};

export const StyledRemoveBtn = styled.span<RemovableProps>`
  ${getRemoveButton};
  font-size: 0.75rem;
  cursor: pointer;
`;
