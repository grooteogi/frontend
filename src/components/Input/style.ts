import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import theme from '../../../styles/theme';

export interface SInputProps {
  color: keyof typeof theme.color.input.color;
  fontColor: keyof typeof theme.color.input.fontColor;
  borderColor?: keyof typeof theme.color.input.borderColor;
  borderRadius: number;
  fontSize: number;
  width: number;
  height: number;
  active?: boolean;
}

const getColors = ({ color, fontColor, borderColor = 'none' }: SInputProps) => {
  const inputTheme = theme.color.input;
  const getBorder = () => {
    if (borderColor !== 'none')
      return `
        border: 1px solid;
        border-color: ${inputTheme.borderColor[borderColor]}`;
  };
  // add unactive code here
  return css`
    ${getBorder()}
    background-color: ${inputTheme.color[color]};
    color: ${inputTheme.fontColor[fontColor]};
    &:hover {
      background: ${lighten(0.1, `${inputTheme.color[color]}`)};
      color: ${lighten(0.1, `${inputTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
    &:active {
      background: ${darken(0.01, `${inputTheme.color[color]}`)};
      color: ${darken(0.01, `${inputTheme.fontColor[fontColor]}`)};
      cursor: pointer;
    }
  `;
};

const getSize = ({ borderRadius, fontSize, width, height }: SInputProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
  `;
};

export const StyledInput = styled.input<SInputProps>`
  ${getColors};
  ${getSize};
  padding-left: 1rem;
`;
