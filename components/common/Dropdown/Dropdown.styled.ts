import styled from '@emotion/styled';
import theme from '@styles/theme';
import { darken } from 'polished';

const getOptionListStyle = ({ active = true, zIndex = 1 }) => {
  return `
  max-height: ${active ? '300px' : '0'};
  z-index: ${zIndex};
  `;
};

const Styled = {
  selectbox: styled.div`
    position: relative;
    width: 8rem;
    border-radius: ${theme.borderRadius.md};
    cursor: pointer;
    &&& {
      font-family: inherit !important;
    }
  `,
  selectedLabel: styled.button`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: none;
    justify-content: right;
    padding-right: 2.5rem;
    font-size: 1rem;
    background: url('/icons/expand_more.svg') calc(100% - 0.5rem) center no-repeat;
    background-size: 1rem;
    cursor: pointer;
  `,
  optionItem: styled.li`
    box-sizing: border-box;
    padding: 0.8rem 1rem 0.8rem 1rem;
    transition: 0.3s;
    &:hover {
      background: ${darken(0.1, theme.color.white)};
    }
  `,
  selectOptionList: styled.ul`
    box-sizing: border-box;
    position: absolute;
    list-style-type: none;
    top: 2.6rem;
    width: 100%;
    border-radius: ${theme.borderRadius.md};
    background: ${theme.color.white};
    box-shadow: 2px 2px 6px ${darken(0.3, theme.color.white)};
    ${getOptionListStyle};
    transition: 0.2s ease-in-out;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: ${darken(0.1, theme.color.white)};
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  `,
};

export default Styled;
