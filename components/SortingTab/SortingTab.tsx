import React, { useState } from 'react';
import { Styled } from './SortingTab.style';

export interface ItemProps {
  value: string;
  onclick?: (e: React.MouseEvent) => void;
}

export interface SortingTabProps {
  itemList: ItemProps[];
}

const SortingTab: React.FC<SortingTabProps> = ({ itemList }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <Styled.container>
      {itemList.map(({ onclick, value }: ItemProps, index) => (
        <Styled.item
          key={index}
          active={selectedIdx === index ? true : false}
          onClick={(e: React.MouseEvent) => {
            setSelectedIdx(index);
            onclick && onclick(e);
          }}
        >
          {value}
        </Styled.item>
      ))}
    </Styled.container>
  );
};

export default SortingTab;
