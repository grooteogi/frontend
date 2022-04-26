import styled from '@emotion/styled';
import { darken } from 'polished';
import theme from '../../../styles/theme';

const headerTheme = theme.style.header;

export type SHeaderDevice = {
  device: 'sm' | 'md';
};

export interface SHeaderAnchor extends SHeaderDevice {
  isLogo?: boolean;
}

const getHeaderBoxStyle = ({ leftPosition = true }) => {
  if (!leftPosition)
    return `
    margin-left : auto;
  `;
};

const getFont = ({ device, isLogo }: SHeaderAnchor) => {
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

const getPadding = ({ device }: SHeaderDevice) => {
  return `padding: ${headerTheme.padding[device]}`;
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

export const StyledHeaderList = styled.div<SHeaderDevice>`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${getPadding};
  cursor: pointer;
  &:hover,
  &:active {
    background: ${darken(0.01, `#FFFFFF`)};
  }
`;

export const StyledHeaderAnchor = styled.a<SHeaderAnchor>`
  display: block;
  text-decoration: none;
  text-align: center;
  ${getFont};
`;
