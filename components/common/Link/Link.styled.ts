import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export interface SLinkProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: keyof typeof theme.color;
  align?: 'left' | 'right' | 'center';
  weight?: keyof typeof theme.weight;
}
const sizes = {
  xs: { fontSize: theme.fontSize.xxs, weight: theme.weight.regular },
  sm: { fontSize: theme.fontSize.xs, weight: theme.weight.regular },
  md: { fontSize: theme.fontSize.sm, weight: theme.weight.regular },
  lg: { fontSize: theme.fontSize.xl, weight: theme.weight.medium },
};

const getColor = ({ color: fontColor }: SLinkProps) => {
  return css`
    &:link,
    &:visited {
      color: ${theme.color[fontColor]};
    }
  `;
};

const getSize = ({ size }: SLinkProps) => {
  return css`
    font-size: ${sizes[size].fontSize};
    font-weight: ${sizes[size].weight};
  `;
};

const getOption = ({ align, weight }: SLinkProps) => {
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

export const StyledLink = styled.a<SLinkProps>`
  ${getSize};
  ${getColor};
  ${getOption};
`;
