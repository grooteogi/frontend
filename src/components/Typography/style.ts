import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { FontWeight } from '../../../types/style';

const typoTheme = theme.style.typo;
export interface STypoProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: keyof typeof theme.style.typo.color;
  align?: 'left' | 'right' | 'center';
  weight?: keyof typeof FontWeight;
}

const getSize = ({ size }: STypoProps) => {
  const sizes = typoTheme.sizes;
  return css`
    font-size: ${sizes[size].fontSize};
    font-weight: ${sizes[size].weight};
  `;
};

const getColor = ({ color }: STypoProps) => {
  return css`
    color: ${typoTheme.color[color]};
  `;
};

const getOption = ({ align, weight }: STypoProps) => {
  const getAlign = () => {
    if (align) return `text-align: ${align}`;
  };
  const getWeight = () => {
    if (weight) return `font-weight: ${FontWeight[weight]}`;
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
`;
