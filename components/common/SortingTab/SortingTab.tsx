import React from 'react';
import { Styled } from './SortingTab.styled';

export interface SortingTabProps {
  itemList: string[];
  value: string;
  onClick: (sort: string | any) => void;
}

const SortingTab: React.FC<SortingTabProps> = ({ itemList, value, onClick }) => {
  return (
    <Styled.container>
      {itemList.map((item, index) => (
        <Styled.item key={index} active={value === item} onClick={() => onClick(item)}>
          {item}
        </Styled.item>
      ))}
    </Styled.container>
  );
};

export default SortingTab;
