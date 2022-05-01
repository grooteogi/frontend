import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';

interface SScorllProps {
  standardHeight: number;
}

const getStandardHeight = ({ standardHeight }: SScorllProps) => {
  return css`
    max-height: ${standardHeight}px;
  `;
};

export const Styled = {
  container: styled.div`
    @media (min-width: 1060px) {
      width: 325px;
    }
    @media (min-width: 768px) and (max-width: 1059px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    border: 1px solid lightgrey;
    border-radius: 12px;
    padding: 2rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  hr: styled.hr`
    color: lightgray;
    width: 100%;
  `,
  likedBtn: styled.button`
    width: 30px;
    height: 30px;
    border: darkgray;
    padding: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  scroll: styled.div`
    ${getStandardHeight};
    display: flex;
    flex-direction: column;
    padding-right: 6px;
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
  `,
  itemBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  row: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  `,
  bottom: styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 6px;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  `,
};

export default Styled;
