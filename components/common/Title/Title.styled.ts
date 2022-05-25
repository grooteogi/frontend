import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

export interface STitleProps {
  size: 'h1' | 'h2' | 'h3' | 'h4';
  color: keyof typeof theme.color;
  align?: 'left' | 'right' | 'center';
}

export const sizes = {
  h4: { fontSize: theme.fontSize.xs, weight: theme.weight.medium },
  h3: { fontSize: theme.fontSize.sm, weight: theme.weight.medium },
  h2: { fontSize: theme.fontSize.lg, weight: theme.weight.medium },
  h1: { fontSize: theme.fontSize.xl, weight: theme.weight.medium },
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

const getOption = ({ align }: STitleProps) => {
  const getAlign = () => {
    if (align) return `text-align: ${align}`;
  };
  return css`
    ${getAlign()};
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
