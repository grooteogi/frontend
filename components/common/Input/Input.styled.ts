import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export interface SInputProps {
  width?: string | number;
  height?: string | number;
  fontColor?: keyof typeof theme.color;
  borderColor?: keyof typeof theme.color;
}

const getStyle = ({ width, height, fontColor, borderColor }: SInputProps) => {
  return css`
    width: ${width};
    height: ${height};
    color: ${theme.color[fontColor ? fontColor : 'black']};
    border-color: ${theme.color[borderColor ? borderColor : 'gray200']};
  `;
};

const Styled = {
  input: styled.input`
    border: 1px solid ${theme.color.gray200};
    color: ${theme.color.black};
    width: 100%;
    border-radius: ${theme.borderRadius.md};
    padding: 0.3rem 1rem 0.3rem 1rem;
    font-family: inherit;
    font-size: ${theme.fontSize.xs};
    height: 40px;
    ${getStyle}
  `,
};

export default Styled;
