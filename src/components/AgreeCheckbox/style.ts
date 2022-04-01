import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface SAgreeCheckboxProps {
  width: number;
  padding: string;
}

const getLayout = ({ width = 150, padding = '0' }) => {
  return css`
    width: ${width}px;
    padding: ${padding};
  `;
};

export const StyledAgreeCheckbox = styled.div<SAgreeCheckboxProps>`
  ${getLayout};
`;
