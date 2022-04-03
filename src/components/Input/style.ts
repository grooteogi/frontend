import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface SInputProps {
  backgroundColor: string;
  fontColor: string;
  borderColor?: string;
  borderRadius: number;
  fontSize: number;
  width: number;
  height: number;
}

const getColors = ({ backgroundColor, fontColor, borderColor = 'none' }: SInputProps) => {
  const getBorder = () => {
    if (borderColor !== 'none')
      return `
        border: 1px solid;
        border-color: ${borderColor}
        `;
  };
  return css`
    ${getBorder()};
    background-color: ${backgroundColor};
    color: ${fontColor};
  `;
};

const getLayouts = ({ borderRadius, fontSize, width, height }: SInputProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
    padding-left: 1rem;
  `;
};

export const StyledInput = styled.input<SInputProps>`
  ${getColors};
  ${getLayouts};
`;
