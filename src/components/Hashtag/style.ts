import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import theme from '../../../styles/theme';

export interface SHashtagProps {
  color: keyof typeof theme.style.hashtag.color;
  fontColor: keyof typeof theme.style.hashtag.fontColor;
  borderColor: keyof typeof theme.style.hashtag.borderColor;
  fontSize: number;
  isActive?: boolean;
}

const getColors = ({ color, fontColor, borderColor, isActive }: SHashtagProps) => {
  const hashtagTheme = theme.style.hashtag;
  return css`
    background-color: ${hashtagTheme.color[color]};
    border: 1px solid ${hashtagTheme.borderColor[borderColor]};
    color: ${hashtagTheme.fontColor[fontColor]};
    &:hover {
      background: ${isActive
        ? darken(0.01, `${hashtagTheme.color[color]}`)
        : lighten(0.01, `${hashtagTheme.color[color]}`)};
      cursor: pointer;
    }
    &:active {
      border: 1px solid ${hashtagTheme.borderColor.primary};
      background: ${isActive
        ? darken(0.05, `${hashtagTheme.color[color]}`)
        : lighten(0.05, `${hashtagTheme.color[color]}`)};
      cursor: pointer;
    }
  `;
};

const getSize = ({ fontSize }: SHashtagProps) => {
  return css`
    font-size: ${fontSize}px;
  `;
};

export const StyledButton = styled.div<SHashtagProps>`
  ${getColors};
  ${getSize};
  border-radius: 4px;
  padding: 10px 20px;
`;
