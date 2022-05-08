import React, { useState } from 'react';
import { Styled } from './SortingTab.styled';

export interface SortingTabProps {
  itemList: string[];
  state: any;
  onClick: (sort: string) => void;
}

const SortingTab: React.FC<SortingTabProps> = ({ itemList, state, onClick }) => {
  return (
    <Styled.container>
      {itemList.map((item, index) => (
        <Styled.item key={index} active={state.sort === item} onClick={() => onClick(item)}>
          {item}
        </Styled.item>
      ))}
    </Styled.container>
  );
};

export default SortingTab;
