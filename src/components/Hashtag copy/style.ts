import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface LinkProps {
  width: number;
  height: number;
}

const getSize = ({ width, height }: LinkProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
  `;
};

export const Wrapper = styled.div<LinkProps>`
  ${getSize};
  border: 1px solid;
  border-color: ${theme.color.lightgrey};
  border-radius: 8px;
`;
