import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@styles/theme';
import { FontWeight } from 'types/style';

const linkTheme = theme.style.link;
export interface SLinkProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: keyof typeof theme.style.link.color;
  align?: 'left' | 'right' | 'center';
  weight?: keyof typeof FontWeight;
}

const getColor = ({ color: fontColor }: SLinkProps) => {
  return css`
    &:link,
    &:visited {
      color: ${linkTheme.color[fontColor]};
    }
  `;
};

const getSize = ({ size }: SLinkProps) => {
  return css`
    font-size: ${linkTheme.sizes[size].fontSize};
    font-weight: ${linkTheme.sizes[size].weight};
  `;
};

const getOption = ({ align, weight }: SLinkProps) => {
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

export const StyledLink = styled.a<SLinkProps>`
  ${getSize};
  ${getColor};
  ${getOption};
`;
