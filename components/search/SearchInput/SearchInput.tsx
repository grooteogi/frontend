import Dropdown from '@components/common/Dropdown';
import SortingTab from '@components/common/SortingTab';
import { useSearchContext } from '../context';
import SearchBar from '@components/search/SearchBar';
import SearchMenu from '@components/search/SearchMenu/HorizontalScroll';
import Styled from './SearchInput.styled';
import { useQuery } from 'react-query';
import search from '@lib/api/search';
import { RegionList, SortType } from 'types/enum';

const SearchInput = () => {
  const { setKeyword } = useSearchContext();
  //   const { data, isError, isLoading } = useQuery(['hashtags'], search.getHashtags);

  //   if (isError) return <>error</>;
  //   if (isLoading) return <>Loading...</>;
  return (
    <Styled.container>
      <SearchBar onSearchClick={setKeyword} placeholder={'검색어를 입력해주세요'} />
    </Styled.container>
  );
};

export default SearchInput;
