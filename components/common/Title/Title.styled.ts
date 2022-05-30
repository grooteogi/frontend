import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

export interface STitleProps {
  size: 'h1' | 'h2' | 'h3' | 'h4';
  color: keyof typeof theme.color;
  weight?: keyof typeof theme.weight;
  align?: 'left' | 'right' | 'center';
}

export const sizes = {
  h4: { fontSize: theme.fontSize.xs, weight: theme.weight.bold },
  h3: { fontSize: theme.fontSize.sm, weight: theme.weight.bold },
  h2: { fontSize: theme.fontSize.lg, weight: theme.weight.bold },
  h1: { fontSize: theme.fontSize.xl, weight: theme.weight.bold },
};

const getSize = ({ size }: STitleProps) => {
  return css`
    font-size: ${sizes[size].fontSize};
    font-weight: ${sizes[size].weight};
  `;
};

const getColor = ({ color }: STitleProps) => {
  return css`
    color: ${theme.color[color]};
  `;
};

const getOption = ({ align, weight }: STitleProps) => {
  const getAlign = () => {
    if (align) return `text-align: ${align}`;
  };
  const getWeight = () => {
    if (weight) return `font-weight: ${theme.weight[weight]}`;
  };
  return css`
    ${getAlign()};
    ${getWeight()};
  `;
};

export const StyledTitle = styled.h1`
  display: flex;
  gap: 0.5rem;
  text-overflow: inherit;
  display: inline-block;
  overflow: inherit;
  width: 100%;
  ${getSize};
  ${getColor};
  ${getOption};
`;
