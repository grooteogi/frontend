import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export interface ContainerProps {
  width?: number;
  height?: number;
}

const getSize = ({ width, height }: ContainerProps) => {
  if (width) {
    return css`
      width: ${width}px;
    `;
  } else if (height) {
    return css`
      height: ${height}px;
    `;
  } else {
    return css`
      width: 100%;
      height: auto;
    `;
  }
};

export const Styled = {
  container: styled.div<ContainerProps>`
    ${getSize};
    border: 1px solid ${theme.color.gray200};
    border-radius: 12px;
    background: ${theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
};
