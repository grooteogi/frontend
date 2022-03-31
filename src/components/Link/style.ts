import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export interface SLinkProps {
  fontSize: number;
}

const getColor = () => {
  const linkTheme = theme.color;

  return css`
    &:link,
    &:visited {
      color: ${linkTheme.themeGreen};
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
