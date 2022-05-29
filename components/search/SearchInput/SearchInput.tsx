import { useSearchContext } from '../context';
import SearchBar from '@components/search/SearchBar';
import Styled from './SearchInput.styled';

const SearchInput = () => {
  const { setKeyword } = useSearchContext();

  return (
    <Styled.container>
      <SearchBar onSearchClick={setKeyword} placeholder={'검색어를 입력해주세요'} />
    </Styled.container>
  );
};

export default SearchInput;
