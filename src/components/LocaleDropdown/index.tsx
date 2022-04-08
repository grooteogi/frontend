import { StyledSortingTab, StyledSortingTabBox } from './style';

export type TabList = {
  name: string;
  selected?: boolean;
};

export interface SortingTabProps {
  tabList: TabList[];
}

const SortingTab = ({ tabList }: SortingTabProps) => {
  return (
    <StyledSortingTabBox>
      {tabList.map(({ name, selected }: TabList) => (
        <StyledSortingTab key={name} selected={selected}>
          {name}
        </StyledSortingTab>
      ))}
    </StyledSortingTabBox>
  );
};

export default SortingTab;
