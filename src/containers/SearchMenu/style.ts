import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ButtonProps {
  leftOrRight: 'right' | 'left';
}

const getPosition = ({ leftOrRight }: ButtonProps) => {
  return leftOrRight === 'left'
    ? css`
        left: 0;
      `
    : css`
        right: 0;
      `;
};

export const Styled = {
  container: styled.div`
    width: 100%;
    position: relative;
  `,
  horizontalScroll: styled.div`
    z-index: 0;
    position: relative;
    display: flex;
    column-gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  button: styled.button<ButtonProps>`
    position: absolute;
    z-index: 1;
    cursor: pointer;
    ${getPosition};
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
