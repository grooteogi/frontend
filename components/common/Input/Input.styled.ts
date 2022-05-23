import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export interface SInputProps {
  width?: string | number;
  height?: string | number;
  fontColor?: keyof typeof theme.style.input.fontColor;
  borderColor?: keyof typeof theme.style.input.borderColor;
}

const getStyle = ({ width, height, fontColor, borderColor }: SInputProps) => {
  return css`
    width: ${width};
    height: ${height};
    color: ${theme.style.input.fontColor[fontColor ? fontColor : 'black']};
    border-color: ${theme.style.input.borderColor[borderColor ? borderColor : 'lightgray']};
  `;
};

const Styled = {
  input: styled.input`
    border: 1px solid #bfbfbf;
    color: #878787;
    width: 100%;
    border-radius: 8px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    font-family: inherit;
    font-size: 14px;
    height: 40px;
    ${getStyle}
  `,
};

export default Styled;
