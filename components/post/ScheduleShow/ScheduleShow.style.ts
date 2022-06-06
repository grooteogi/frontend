import Typography from '@components/common/Typography';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { darken } from 'polished';
import theme from '@styles/theme';

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
    @media (max-width: 1059px) {
      width: 100%;
    }
    padding: 2rem;
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
    & >*{
      border-bottom: 1px solid ${theme.color.gray400};
    }
    & :last-of-type {
      border-bottom: 0px;
    }
    }
  `,
  itemBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0;
  `,
  bottom: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 6px;
    align-items: center;
    margin-top: 10px;
  `,
};

export default Styled;
