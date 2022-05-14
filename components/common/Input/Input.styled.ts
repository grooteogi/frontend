import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface SInputProps {
  width?: string;
  height?: string;
  fontColor?: string;
  borderColor?: string;
}

const getStyle = ({ ...props }: SInputProps) => {
  return css`
    width: ${props.width};
    height: ${props.height};
    color: ${props.fontColor};
    border-color: ${props.borderColor};
  `;
};

const Styled = {
  input: styled.input`
    border: 1px solid #bfbfbf;
    color: #878787;
    width: 100%;
    border-radius: 8px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    font-family: inherit;
    font-size: 16px;
    height: 40px;
    ${getStyle}
  `,
};

export default Styled;
