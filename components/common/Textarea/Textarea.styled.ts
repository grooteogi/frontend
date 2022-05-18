import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface STextareaProps {
  width?: string;
  height?: string;
  fontColor?: string;
  borderColor?: string;
}

const getStyle = ({ ...props }: STextareaProps) => {
  return css`
    width: ${props.width};
    height: ${props.height};
    color: ${props.fontColor};
    border-color: ${props.borderColor};
  `;
};

const Styled = {
  textarea: styled.textarea`
    border: 1px solid #bfbfbf;
    color: #878787;
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    outline: none;
    font-family: inherit;
    font-size: 14px;
    box-sizing: border-box;
    overflow-y: scroll;
    resize: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    ${getStyle}
  `,
};

export default Styled;
