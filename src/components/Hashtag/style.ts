import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import theme from '../../../styles/theme';

export interface SButtonProps {
  color: keyof typeof theme.color.hashtag.color;
  fontColor: keyof typeof theme.color.hashtag.fontColor;
  borderColor: keyof typeof theme.color.hashtag.borderColor;
  fontSize: number;
  active?: boolean;
}

const getColors = ({ color, fontColor, borderColor }: SButtonProps) => {
  const hashtagTheme = theme.color.hashtag;
  return css`
    background-color: ${hashtagTheme.color[color]};
    border: 1px solid ${hashtagTheme.borderColor[borderColor]};
    color: ${hashtagTheme.fontColor[fontColor]};
    &:hover {
      background: ${lighten(0.01, `${hashtagTheme.color[color]}`)};
      color: ${lighten(0.1, `${hashtagTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
    &:active {
      border: 1px solid ${hashtagTheme.borderColor.primary};
      color: ${darken(0.01, `${hashtagTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
  `;
};

const getSize = ({ fontSize }: SButtonProps) => {
  return css`
    font-size: ${fontSize}px;
  `;
};

export const StyledButton = styled.button<SButtonProps>`
  ${getColors};
  ${getSize};
  border-radius: 4px;
  padding: 10px 20px;
`;
