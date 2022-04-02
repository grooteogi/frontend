import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { darken } from 'polished';

export interface SHeaderList {
  leftPosition?: boolean;
}

export interface SHeaderAnchor {
  isLogo?: boolean;
}

const getHeaderStyle = () => {
  return `
    display: flex;
    border: none;
    width: 80vw;
    height: 60px;
  `;
};

const getHeaderListPosition = ({ leftPosition = true }) => {
  if (!leftPosition)
    return `
    margin-left : auto;
  `;
};

const getHeaderListStyle = ({ ...leftPosition }) => {
  return css`
    ${getHeaderListPosition(leftPosition)};
    list-style: none;
    vertical-align: middle;
    padding: 2rem;
    height: 60px;
    cursor: pointer;
    &:hover,
    &:active {
      background: ${darken(0.01, `#ffffff`)};
    }
  `;
};

const getLogo = ({ isLogo = false }) => {
  if (isLogo)
    return `
      font-size: 16; 
      font-weight: bold;
      color: #000000;
    `;
  else
    `
    font-size: 12; 
    font-weight: normal;
    color: #737373;
  `;
};

const getHeaderAnchorStyle = ({ ...isLogo }) => {
  return css`
    ${getLogo(isLogo)};
    text-decoration: none;
    text-align: center;
  `;
};

export const StyledHeader = styled.div`
  background-color: white;
  ${getHeaderStyle};
`;

export const StyledHeaderList = styled.div<SHeaderList>`
  ${getHeaderListStyle};
`;

export const StyledDiv = styled.div`
  display: flex;
  ${getHeaderListPosition};
`;

export const StyledHeaderAnchor = styled.a<SHeaderAnchor>`
  display: block;
  ${getHeaderAnchorStyle};
`;
