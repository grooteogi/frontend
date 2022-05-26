import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '@styles/theme';

export interface ButtonProps {
  clicked?: boolean;
}
const getColor = ({ clicked }: ButtonProps) => {
  return css`
    background-color: ${clicked ? theme.color.white : theme.color.gray100};
    border: 2px solid ${clicked ? theme.color.primary : theme.color.gray100};
  `;
};

export const Styled = {
  button: styled.div<ButtonProps>`
    ${getColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: ${theme.borderRadius.md};
    &:hover {
      background: ${darken(0.01, `${theme.color.white}`)};
      cursor: pointer;
    }
    &:active {
      background: ${darken(0.05, `${theme.color.white}`)};
      cursor: pointer;
    }
    ${theme.responsive.pc} {
      width: 160px;
      height: 45px;
    }
    ${theme.responsive.tablet} {
      width: 120px;
      height: 40px;
    }
    ${theme.responsive.mobile} {
      width: 90px;
      height: 40px;
    }
  `,
};
