import Dropdown from '@components/common/Dropdown';
import SortingTab from '@components/common/SortingTab';
import { RegionList, SortType } from 'types/enum';
import { useSearchContext } from '../context';
import Styled from './SearchFiltering.styled';

const SearchFiltering = () => {
  const { searchState, setSort, setRegion } = useSearchContext();

  return (
    <Styled.container>
      <SortingTab
        value={searchState.sort}
        onClick={setSort}
        itemList={Object.entries(SortType).map(([key, value]) => key as string)}
      />
      <Dropdown
        value={searchState.region}
        onClick={setRegion}
        list={Object.values(RegionList)
          .filter(value => typeof value === 'string')
          .map(value => value as string)}
      />
    </Styled.container>
  );
};

export default SearchFiltering;
