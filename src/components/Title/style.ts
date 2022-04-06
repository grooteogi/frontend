import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export interface STitleProps {
  size: 'h1' | 'h2' | 'h3' | 'h4';
  color: keyof typeof theme.style.title.color;
  align?: 'left' | 'right' | 'center';
}

const getSize = ({ size }: STitleProps) => {
  const sizes = theme.style.title.sizes;
  return css`
    font-size: ${sizes[size].fontSize};
    font-weight: ${sizes[size].weight};
  `;
};

const getColor = ({ color }: STitleProps) => {
  return css`
    color: ${theme.style.title.color[color]};
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
  justify-content: center;
  gap: 0.5rem;
  ${getSize};
  ${getColor};
  ${getOption};
`;
