import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface ContainerProps {
  flexDirection: 'row' | 'column';
  interval?: number;
  rowInterval?: number;
  columnInterval?: number;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
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

const getOption = ({ interval, rowInterval, columnInterval, justifyContent, alignItems }: ContainerProps) => {
  const getInterval = () => {
    if (interval) return `gap: ${interval}px`;
  };
  const getRowInterval = () => {
    if (rowInterval) return `row-gap: ${rowInterval}px`;
  };
  const getColumnInterval = () => {
    if (columnInterval) return `column-gap: ${columnInterval}px`;
  };
  const getjustifyContent = () => {
    if (columnInterval) return `justify-content: ${justifyContent}`;
  };
  const getalignItems = () => {
    if (columnInterval) return `align-items: ${alignItems}`;
  };
  return css`
    ${getInterval()};
    ${getRowInterval()};
    ${getColumnInterval()};
    ${getjustifyContent()};
    ${getalignItems()};
  `;
};

export const Container = styled.div<ContainerProps>`
  ${getFlexDirection}
  ${getOption}
  padding-bottom: 2rem;
  display: flex;
`;
