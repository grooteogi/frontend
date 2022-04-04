import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface ContainerProps {
  width: number;
  height: number;
}

const getSize = ({ width, height }: ContainerProps) => {
  return css`
    width: ${width}px;
    height: ${height}px;
  `;
};

export const Container = styled.div<ContainerProps>`
  ${getSize};
  border: 1px solid ${theme.style.lightgrey};
  border-radius: 8px;
  margin: auto;
  margin-top: 64px;
  padding: 80px 48px;
  background: ${theme.style.white};
  display: block;
`;
