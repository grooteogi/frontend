import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';
import { StyledSortingTab, StyledSortingTabBox } from './style';

export interface SortingTabItemProps {
  children: string;
  active: boolean;
  onTabClick?: (e: React.MouseEvent) => void;
}

export const SortingTabItem = ({ active, onTabClick, children }: SortingTabItemProps) => {
  return (
    <StyledSortingTab active={active} onClick={onTabClick}>
      {children}
    </StyledSortingTab>
  );
};

export interface SortingTabProps {
  children?: JSX.Element | JSX.Element[];
}

const SortingTab = ({ children }: SortingTabProps) => {
  return <StyledSortingTabBox>{children}</StyledSortingTabBox>;
};

export default SortingTab;
