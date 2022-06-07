import Button from '@components/common/Button';
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
    border: 1px solid ${theme.color.gray200};
    border-radius: 12px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: start;
    row-gap: 1rem;
    ${theme.responsive.pc} {
      width: 325px;
      padding: 2rem 1.5rem 1.5rem 1.5rem;
    }
    ${theme.responsive.tablet} {
      width: 100%;
      padding: 2rem;
    }
    ${theme.responsive.mobile} {
      width: 100%;
      padding: 1rem;
    }
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
    font-size: 0.7rem;
    height: 30px;
    width: 60%;
  `,
  submitBtn: styled(Button)`
    height: 30px;
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
    & > * {
      border-bottom: 1px solid ${theme.color.gray400};
    }
    & :last-of-type {
      border-bottom: 0px;
    }
  `,
  itemBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0;
  `,
  row: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  innerContainer: styled.div`
    width: 100%;
    padding: 1rem;
    border: 1px solid ${theme.color.gray200};
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
