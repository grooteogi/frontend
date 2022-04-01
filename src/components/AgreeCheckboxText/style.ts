import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface SAgreeCheckboxTextProps {
  fontColor?: string;
  fontSize?: number;
  float?: string;
  hidden?: boolean;
}

const getLayout = ({ float = 'left', hidden = false }) => {
  return css`
    float: ${float};
    display: ${hidden ? 'none' : 'inline'};
  `;
};

const getFont = ({ fontColor = '#4e4e4e', fontSize = 12 }) => {
  return css`
    display: block;
    position: relative;
    font-size: ${fontSize}px;
    color: ${fontColor};
  `;
};
export const StyledAgreeCheckboxText = styled.span<SAgreeCheckboxTextProps>`
  ${getFont};
`;
