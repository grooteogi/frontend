import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

const typoTheme = theme.style.typo;
export interface SLinkProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: keyof typeof theme.style.typo.color;
  weight?: keyof typeof theme.style.typo.weight;
}

const getColor = ({ color: fontColor }: SLinkProps) => {
  return css`
    &:link,
    &:visited {
      color: ${typoTheme.color[fontColor]};
    }
  `;
};

const getSize = ({ size }: SLinkProps) => {
  return css`
    font-size: ${typoTheme.sizes[size].fontSize};
    font-weight: ${typoTheme.sizes[size].weight};
  `;
};

export const StyledLink = styled.a<SLinkProps>`
  ${getSize};
  ${getColor};
`;
