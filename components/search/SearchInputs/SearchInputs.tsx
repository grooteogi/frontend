import Dropdown from '@components/common/Dropdown';
import SortingTab from '@components/common/SortingTab';
import { TagMenuEntity } from 'types/fetchedData';
import { useSearch } from '../context';
import SearchBar from '@components/search/SearchBar';
import SearchMenu from '@components/search/SearchMenu';
import Styled from './SearchInputs.styled';
import { useQuery } from 'react-query';
import search from '@lib/api/search';

const SearchInputs = () => {
  const { searchState, setKeyword, setTag, setSort, setRegion } = useSearch();
  const { data, isError, isLoading } = useQuery(['hashtags'], search.getHashtags);

  if (isError) return <>error</>;
  if (isLoading) return <>Loading...</>;
  return (
    <Styled.container>
      <Styled.input>
        <SearchBar onSearchClick={setKeyword} placeholder={'검색어를 입력해주세요'} />
      </Styled.input>
      <SearchMenu value={searchState.tag} onClick={setTag} data={data as TagMenuEntity[]} />
      <Styled.itemSelector>
        <SortingTab value={searchState.sort} onClick={setSort} itemList={['최신순', '인기순', '조회순']} />
        <Dropdown
          value={searchState.region}
          onClick={setRegion}
          list={['강서구', '구로구', '금천구', '관악구', '동작구', '영등포구', '양천구', ' 마포구', '서대문구']}
        />
      </Styled.itemSelector>
    </Styled.container>
  );
};

export default SearchInputs;
