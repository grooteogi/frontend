import Button from '@components/common/Button';
import Typography from '@components/common/Typography';
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
      padding: 2rem 1rem 1rem 1rem;
    }
    @media (max-width: 1059px) {
      width: 100%;
      padding: 2rem;
    }
    border: 1px solid lightgrey;
    border-radius: 12px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: start;
  `,
  title: styled(Typography)`
    font-size: 1.2rem;
    font-weight: 600;
  `,
  input: styled.input`
    border: 1px solid #bfbfbf;
    border-width: 0 0 1px 0;
    color: #878787;
    width: 100%;
    padding: 0.3rem;
    font-size: 0.875rem;
    height: 30px;
    text-align: right;
    width: 60%;
  `,
  submitBtn: styled(Button)`
    height: 30px;
  `,
  hr: styled.hr`
    color: lightgray;
    width: 100%;
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
  `,
  innerContainer: styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: 1px solid lightgrey;
    border-radius: 12px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: start;
    gap: 10px;
  `,
};

export default Styled;
