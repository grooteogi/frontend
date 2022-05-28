import React from 'react';
import { useSearchDispatch } from '../context';
import SearchBar from '@components/search/SearchBar';
import Styled from './SearchInput.styled';

const SearchInput = () => {
  const searchDispatch = useSearchDispatch();

  const setKeyword = React.useCallback((keyword: string) => {
    searchDispatch({ type: 'SET_KEYWORD', keyword });
  }, []);

  return (
    <Styled.container>
      <SearchBar onSearchClick={setKeyword} placeholder={'검색어를 입력해주세요'} />
    </Styled.container>
  );
};

export default React.memo(SearchInput);
