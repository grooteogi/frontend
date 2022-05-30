import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const sizes = {
  xxs: { fontSize: theme.fontSize.xxs, weight: theme.weight.light },
  xs: { fontSize: theme.fontSize.xs, weight: theme.weight.regular },
  sm: { fontSize: theme.fontSize.sm, weight: theme.weight.regular },
  md: { fontSize: theme.fontSize.lg, weight: theme.weight.regular },
  lg: { fontSize: theme.fontSize.xl, weight: theme.weight.medium },
};

export interface STypoProps {
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  color: keyof typeof theme.color;
  align?: 'left' | 'right' | 'center';
  weight?: keyof typeof theme.weight;
}

const getSize = ({ size }: STypoProps) => {
  return css`
    font-size: ${sizes[size].fontSize};
    font-weight: ${sizes[size].weight};
  `;
};

const getColor = ({ color }: STypoProps) => {
  return css`
    color: ${theme.color[color]};
  `;
};

const getOption = ({ align, weight }: STypoProps) => {
  const getAlign = () => {
    if (align) return `text-align: ${align}`;
  };
  const getWeight = () => {
    if (weight) return `font-weight: ${theme.weight[weight]}`;
  };
  return css`
    ${getAlign()};
    ${getWeight()}
  `;
};

export const StyledTypo = styled.p`
  ${getSize};
  ${getColor};
  ${getOption};
  line-height: 1.4rem;
`;
