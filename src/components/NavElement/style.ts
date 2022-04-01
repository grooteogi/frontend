import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken, lighten } from 'polished';

export interface SHeaderListProps {
  fontSize?: number;
  fontWeight?: string;
  fontColor?: string;
  backgroundColor?: string;
  float?: string;
}

const getColors = ({ backgroundColor = '#ffffff' }: SHeaderListProps) => {
  return css`
    background-color: ${backgroundColor};
    &:hover {
      background: ${lighten(0.1, `${backgroundColor}`)};
      cursor: pointer;
    }
    &:active {
      background: ${darken(0.01, `${backgroundColor}`)};
      cursor: pointer;
    }
  `;
};
const getLayout = ({ float = 'left' }: SHeaderListProps) => {
  return css`
    display: inline;
    list-style: none;
    float: ${float};
    vertical-align: middle;
    padding: 2rem;
    height: 60px;
  `;
};
export const StyledHeaderList = styled.li<SHeaderListProps>`
  ${getColors};
  ${getLayout};
`;

const getFont = ({ fontSize = 12, fontWeight = 'regular', fontColor = '#737373' }) => {
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    font-family: sans-serif;
    color: ${fontColor};
    text-decoration: none;
    text-align: center;
  `;
};
export const StyledHeaderAnchor = styled.a`
  display: block;
  ${getFont};
  &:visited,
  :hover {
    text-decoration: none;
  }
`;
