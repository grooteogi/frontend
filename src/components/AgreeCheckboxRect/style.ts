import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface SAgreeCheckboxRectProps {
  backgroundColor?: string;
  borderColor?: string;
}

const getColors = ({ backgroundColor, borderColor = 'none' }: SAgreeCheckboxRectProps) => {
  const getBorder = () => {
    if (borderColor !== 'none')
      return `
        border: 1px solid;
        border-color: ${borderColor}
      `;
  };
  return css`
    ${getBorder()}
    background-color: ${backgroundColor};
    &:checked {
      background-color: ${backgroundColor};
    }
  `;
};

const getLayout = () => {
  return css`
    display: inline-block;
    position: relative;
  `;
};

const getSize = () => {
  return css`
    width: 16px;
    height: 16px;
    border-radius: 4px;
  `;
};

export const StyledAgreeCheckboxInput = styled.input`
  display: none;
`;

export const StyledAgreeCheckboxRect = styled.label<SAgreeCheckboxRectProps>`
  ${getLayout};
  ${getColors};
  ${getSize};
`;
