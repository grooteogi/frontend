import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';
import theme from '../../../styles/theme';

const headerTheme = theme.style.header;

export type SHeaderDevice = {
  device: 'sm' | 'md' | 'lg';
};

export interface SHeaderList extends SHeaderDevice {
  leftPosition?: boolean;
}

export interface SHeaderAnchor extends SHeaderDevice {
  isLogo?: boolean;
}

const getHeaderBoxStyle = ({ leftPosition = true }) => {
  if (!leftPosition)
    return `
    margin-left : auto;
  `;
};

const getHeaderListStyle = ({ device, ...leftPosition }: SHeaderList) => {
  return css`
    ${getHeaderBoxStyle(leftPosition)};
    padding: ${headerTheme.headerListPadding[device]};
  `;
};

const getLogo = ({ device, isLogo }: SHeaderAnchor) => {
  if (isLogo)
    return `
      font-size: ${headerTheme.fontSizeLogo[device]}; 
      font-weight: bold;
      color: #000000;
    `;
  return `
    font-size: ${headerTheme.fontSizeBasic[device]}; 
    font-weight: normal;
    color: #737373;
  `;
};

const getHeaderAnchorStyle = ({ device, isLogo }: SHeaderAnchor) => {
  return css`
    ${getLogo({ device, isLogo })};
    text-decoration: none;
    text-align: center;
  `;
};

export const StyledHeader = styled.div`
  background-color: white;
  display: flex;
  border: none;
  width: 100%;
  height: 60px;
`;

export const StyledHeaderBox = styled.div`
  display: flex;
  ${getHeaderBoxStyle};
`;

export const StyledHeaderList = styled.div<SHeaderList>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
  cursor: pointer;
  &:hover,
  &:active {
    background: ${darken(0.01, `#ffffff`)};
  }
  /* ${getHeaderListStyle}; */
`;

export const StyledHeaderAnchor = styled.a<SHeaderAnchor>`
  display: block;
  ${getHeaderAnchorStyle};
`;
