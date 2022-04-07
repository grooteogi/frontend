import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface ContainerProps {
  flexDirection: 'row' | 'column';
  gap?: { gap?: number; rowGap?: number; columnGap?: number };
  padding?: { padding?: string; paddingTop?: string; paddingBottom?: string };
  margin?: { margin?: string; marginTop?: string; marginBottom?: string };
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
const getGap = ({ gap }: ContainerProps) => {
  if (gap) {
    return css`
      ${gap.gap ? `gap: ${gap.gap}px` : ``};
      ${gap.rowGap ? `row-gap: ${gap.rowGap}px` : ``};
      ${gap.columnGap ? `column-gap: ${gap.columnGap}px` : ``};
    `;
  }
};

const getOption = ({ justifyContent, alignItems }: ContainerProps) => {
  const getjustifyContent = () => {
    if (justifyContent) return `justify-content: ${justifyContent}`;
  };
  const getalignItems = () => {
    if (alignItems) return `align-items: ${alignItems}`;
  };
  return css`
    ${getjustifyContent()};
    ${getalignItems()};
  `;
};

const getSpace = ({ padding, margin }: ContainerProps) => {
  const getPadding = () => {
    if (padding) {
      return ` ${padding.padding ? `padding: ${padding.padding}` : ``};
      ${padding.paddingTop ? `padding-top: ${padding.paddingTop}` : ``};
      ${padding.paddingBottom ? `padding-bottom: ${padding.paddingBottom}` : ``};`;
    }
  };
  const getMargin = () => {
    if (margin) {
      return ` ${margin.margin ? `margin: ${margin.margin}` : ``};
      ${margin.marginTop ? `margin-top: ${margin.marginTop}` : ``};
      ${margin.marginBottom ? `margin-bottom: ${margin.marginBottom}` : ``};`;
    }
  };
  return css`
    ${getPadding()}
    ${getMargin()}
  `;
};

export const Container = styled.div<ContainerProps>`
  ${getFlexDirection}
  ${getGap}
  ${getSpace}
  ${getOption}
  display: flex;
`;
