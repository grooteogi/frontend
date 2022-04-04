import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import theme from '../../../styles/theme';

export interface SButtonProps {
  color: keyof typeof theme.style.button.color;
  fontColor: keyof typeof theme.style.button.fontColor;
  borderColor?: keyof typeof theme.style.button.borderColor;
  size: 'sm' | 'md' | 'lg';
  active?: boolean;
}

const getColors = ({ color, fontColor, borderColor = 'none' }: SButtonProps) => {
  const buttonTheme = theme.style.button;
  const getBorder = () => {
    if (borderColor !== 'none') return `border: 1px solid ${buttonTheme.borderColor[borderColor]}`;
  };
  return css`
    ${getBorder()};
    background-color: ${buttonTheme.color[color]};
    color: ${buttonTheme.fontColor[fontColor]};
    &:hover {
      background-color: ${lighten(0.05, `${buttonTheme.color[color]}`)};
      color: ${lighten(0.1, `${buttonTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
    &:active {
      background-color: ${darken(0.01, `${buttonTheme.color[color]}`)};
      color: ${darken(0.01, `${buttonTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
  `;
};

const getSize = ({ size }: SButtonProps) => {
  const getSizeType = () => {
    if (size === 'sm') return `width: 64px; height: 25px;font-size: 11px; border-radius: 4px;`;
    else if (size === 'md') return `width: 150px; height: 40px;`;
    else if (size === 'lg') return `width: 100%; height: 50px;`;
  };
  return css`
    ${getSizeType()};
  `;
};

export const StyledButton = styled.button<SButtonProps>`
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  ${getColors};
  ${getSize};
`;
