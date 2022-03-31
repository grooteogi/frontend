import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface SHeaderProps {
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  width: number;
  height: number;
}

const getLayout = ({ backgroundColor = '#ffffff', margin = '0', padding = '0', width, height }: SHeaderProps) => {
  return css`
    display: flex;
    justify-content: space-between;
    list-style-type: 'none';

    border: none;
    margin: ${margin};
    padding: ${padding};
    width: ${width}vw;
    height: ${height}px;

    background-color: ${backgroundColor};
  `;
};

export const StyledHeader = styled.ul<SHeaderProps>`
  ${getLayout};
`;
