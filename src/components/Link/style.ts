import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface SLinkProps {
  fontSize: number;
  fontColor: keyof typeof theme.color.link.fontColor;
}

const getColor = ({ fontColor }: SLinkProps) => {
  const linkTheme = theme.color.link;

  return css`
    &:link,
    &:visited {
      color: ${linkTheme.fontColor[fontColor]};
    }
  `;
};

const getSize = ({ fontSize }: SLinkProps) => {
  return css`
    font-size: ${fontSize}px;
  `;
};

export const StyledAnchor = styled.a<SLinkProps>`
  ${getSize};
  ${getColor};
`;
