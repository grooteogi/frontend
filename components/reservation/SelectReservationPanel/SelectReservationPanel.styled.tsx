import styled from '@emotion/styled';
import theme from '@styles/theme';
import { darken } from 'polished';

const Styled = {
  container: styled.div`
    width: 100%;
    padding: 2rem;
    border: 1px solid lightgrey;
    border-radius: 12px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: start;
    gap: 20px;
    margin-bottom: 50px;
    ${theme.responsive.mobile} {
      padding: 1rem;
    }
  `,
  scroll: styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 6px;
    max-height: 260px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: ${darken(0.1, '#ffffff')};
    }
    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
    ${theme.responsive.mobile} {
      max-height: 220px;
    }
    & > * {
      border-bottom: 1px solid ${theme.color.gray400};
    }
    & :last-of-type {
      border-bottom: 0px;
    }
  `,
  itemBox: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 10px 0;
    align-items: flex-start;
    border-bottom: 1px solid ${theme.color.gray200};
    &:last-of-type {
      border-bottom: 0;
    }
    ${theme.responsive.mobile} {
      padding: 0.5rem 0;
    }
  `,
  radioSpan: styled.span`
    padding-top: 3px;
  `,
};

export default Styled;
