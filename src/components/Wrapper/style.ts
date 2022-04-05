import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface ContainerProps {
  flexDirection: 'row' | 'column';
  interval?: number;
  rowInterval?: number;
  columnInterval?: number;
}

const getFlexDirection = ({ flexDirection }: ContainerProps) => {
  if (flexDirection === 'row') {
    return css`
      flex-direction: row;
      flex-wrap: wrap;
    `;
  } else if (flexDirection === 'column') {
    return css`
      flex-direction: column;
    `;
  }
};

const getInterval = ({ interval, rowInterval, columnInterval }: ContainerProps) => {
  if (interval)
    return css`
      gap: ${interval}px;
    `;
  else if (rowInterval)
    return css`
      row-gap: ${rowInterval}px;
    `;
  else if (columnInterval)
    return css`
      column-gap: ${columnInterval}px;
    `;
};

export const Container = styled.div<ContainerProps>`
  ${getFlexDirection}
  ${getInterval}
  padding-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
`;
