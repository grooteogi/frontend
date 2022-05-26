import Dropdown from '@components/common/Dropdown';
import SortingTab from '@components/common/SortingTab';
import { useSearchContext } from '../context';
import SearchBar from '@components/search/SearchBar';
import SearchMenu from '@components/search/SearchMenu/HorizontalScroll';
import Styled from './SearchInput.styled';
import { useQuery } from 'react-query';
import search from '@lib/api/search';
import { RegionList, SortType } from 'types/enum';

// TODO: need to resolve hashtag type on API call

const SearchInput = () => {
  const { searchState, setKeyword, setSort, setRegion } = useSearchContext();
  //   const { data, isError, isLoading } = useQuery(['hashtags'], search.getHashtags);

  //   if (isError) return <>error</>;
  //   if (isLoading) return <>Loading...</>;
  return (
    <Styled.container>
      {/* <Styled.input> */}
      <SearchBar onSearchClick={setKeyword} placeholder={'검색어를 입력해주세요'} />
      {/* </Styled.input>
      <Styled.itemSelector>
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
      </Styled.itemSelector> */}
    </Styled.container>
  );
};

export default SearchInput;
