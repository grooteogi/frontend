import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface ContainerProps {
  width: number;
  height: number;
}
export interface ImageContainerProps {
  children: JSX.Element;
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
  background: ${theme.style.white};
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  border: 1px solid black;
  border-radius: 12px;
  height: '200px';
  width: '230px';
  position: 'relative';
`;
