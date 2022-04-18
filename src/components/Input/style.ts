import styled from '@emotion/styled';
import { css } from '@emotion/react';

const getCommonStyle = () => {
  return css`
    border: 1px solid #bfbfbf;
    color: #878787;
    font-size: 1rem;
    width: 100%;
    border-radius: 8px;
    padding: 0.3rem 1rem 0.3rem 1rem;
    font-family: inherit;
  `;
};

const Styled = {
  input: styled.input`
    ${getCommonStyle};
    height: 40px;
  `,
  textarea: styled.textarea`
    ${getCommonStyle};
    box-sizing: border-box;
    overflow-y: scroll;
    resize: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

export default Styled;
