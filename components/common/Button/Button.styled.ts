import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';
import theme from '@styles/theme';

export interface SButtonProps {
  color: keyof typeof theme.color;
  fontColor: keyof typeof theme.color;
  borderColor?: keyof typeof theme.color;
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const getColors = ({ color, fontColor, borderColor = 'none', disabled = false }: SButtonProps) => {
  const getBorder = () => {
    if (borderColor !== 'none') return `border: 1px solid ${theme.color[borderColor]}`;
  };
  const getDisabled = () => {
    if (disabled) return `background-color: ${theme.color.gray200}; color: ${theme.color.white};`;
    else
      return `&:hover {
      background-color: ${lighten(0.05, `${theme.color[color]}`)};
      color: ${lighten(0.1, `${theme.color[fontColor]}`)};
      cursor: pointer;
    }
    &:active {
      background-color: ${darken(0.01, `${theme.color[color]}`)};
      color: ${darken(0.01, `${theme.color[fontColor]}`)};
      cursor: pointer;
    }`;
  };
  return css`
    ${getBorder()};
    background-color: ${theme.color[color]};
    color: ${theme.color[fontColor]};
    ${getDisabled()};
  `;
};

const getSize = ({ size, color }: SButtonProps) => {
  const getSizeType = () => {
    if (size === 'sm') return `width: 64px; height: 25px;font-size: 11px; border-radius: ${theme.borderRadius.sm};`;
    else if (size === 'md') return `width: 150px; height: 40px;`;
    else if (size === 'lg') return `width: 100%; height: 50px;`;
  };
  const getColor = () => {
    if (color === 'none') return `width: auto; height: auto;`;
  };
  return css`
    ${getSizeType()};
    ${getColor()};
  `;
};

export const StyledButton = styled.button<SButtonProps>`
  border-radius: ${theme.borderRadius.md};
  font-size: 16px;
  font-weight: ${theme.weight.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  ${getColors};
  ${getSize};
`;
