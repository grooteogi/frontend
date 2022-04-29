import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '@styles/theme';

export interface ButtonProps {
  clicked?: boolean;
}
const hashtagTheme = theme.style.hashtag;
const getColor = ({ clicked }: ButtonProps) => {
  return css`
    background-color: ${clicked ? hashtagTheme.color.white : hashtagTheme.color.bluegray};
    border: 2px solid ${clicked ? hashtagTheme.borderColor.primary : hashtagTheme.borderColor.bluegray};
  `;
};

export const Styled = {
  button: styled.div<ButtonProps>`
    ${getColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    &:hover {
      background: ${darken(0.01, `${hashtagTheme.color.white}`)};
      cursor: pointer;
    }
    &:active {
      background: ${darken(0.05, `${hashtagTheme.color.white}`)};
      cursor: pointer;
    }
    @media (min-width: 1060px) {
      width: 160px;
      height: 45px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 120px;
      height: 40px;
    }
    @media (max-width: 767px) {
      width: 90px;
      height: 40px;
    }
  `,
};
