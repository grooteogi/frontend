import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface ContainerProps {
  width?: number;
  height?: number;
}

const getSize = ({ width, height }: ContainerProps) => {
  if (width && height) {
    return css`
      width: ${width}px;
      height: ${height}px;
    `;
  } else {
    return css`
      @media (min-width: 1060px) {
        width: 1060px;
      }
      @media (min-width: 768px) and (max-width: 1059px) {
        width: 767px;
      }
      @media (max-width: 767px) {
        width: 390px;
      }
      height: auto;
    `;
  }
};

export const Styled = {
  container: styled.div<ContainerProps>`
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
  `,
};
