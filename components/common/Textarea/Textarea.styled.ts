import styled from '@emotion/styled';

const Styled = {
  textarea: styled.textarea`
    border: 1px solid #bfbfbf;
    color: #878787;
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    font-family: inherit;
    font-size: 16px;
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
