import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import theme from '../../../styles/theme';

export interface SButtonProps {
  color: keyof typeof theme.style.button.color;
  fontColor: keyof typeof theme.style.button.fontColor;
  borderColor?: keyof typeof theme.style.button.borderColor;
  fontSize: number;
  width: number;
  height: number;
  active?: boolean;
}

const getColors = ({ color, fontColor, borderColor = 'none' }: SButtonProps) => {
  const buttonTheme = theme.style.button;
  const getBorder = () => {
    if (borderColor !== 'none')
      return `
	border: 1px solid;
	border-color: ${buttonTheme.borderColor[borderColor]}`;
  };
  // add unactive code here
  return css`
    ${getBorder()}
    background-color: ${buttonTheme.color[color]};
    color: ${buttonTheme.fontColor[fontColor]};
    &:hover {
      background: ${lighten(0.1, `${buttonTheme.color[color]}`)};
      color: ${lighten(0.1, `${buttonTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
    &:active {
      background: ${darken(0.01, `${buttonTheme.color[color]}`)};
      color: ${darken(0.01, `${buttonTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
  `;
};

const getSize = ({ fontSize, width, height }: SButtonProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
  `;
};

export const StyledButton = styled.button<SButtonProps>`
  ${getColors};
  ${getSize};
  border-radius: 8px;
`;
