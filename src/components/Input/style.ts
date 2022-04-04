import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

const inputTheme = theme.style.input;

export interface SInputProps {
  backgroundColor?: keyof typeof inputTheme.backgroundColor;
  fontColor?: keyof typeof inputTheme.fontColor;
  borderColor?: keyof typeof inputTheme.borderColor;
  fontSize?: 'sm' | 'md';
  width: number;
  height: number;
}

const getColors = ({ backgroundColor = 'white', fontColor = 'gray', borderColor = 'lightgray' }: SInputProps) => {
  const getBorder = () => {
    if (borderColor !== 'none')
      return `
        border: 1px solid;
        border-color: ${inputTheme.borderColor[borderColor]};
        `;
  };
  return css`
    ${getBorder()};
    background-color: ${inputTheme.backgroundColor[backgroundColor]};
    color: ${inputTheme.fontColor[fontColor]};
  `;
};

const getFont = ({ fontSize = 'md' }: SInputProps) => {
  const sizes = inputTheme.sizes;
  return css`
    font-size: ${sizes[fontSize].fontSize};
  `;
};

const getLayouts = ({ width, height }: SInputProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
    border-radius: 8px;
    padding-left: 1rem;
  `;
};

export const StyledInput = styled.input<SInputProps>`
  ${getColors};
  ${getFont};
  ${getLayouts};
`;
