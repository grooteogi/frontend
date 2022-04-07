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
  border-radius: 12px;
  margin: auto;
  margin-top: 4rem;
  padding: 4rem 4rem;
  background: ${theme.style.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
