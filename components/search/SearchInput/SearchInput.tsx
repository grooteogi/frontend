import React from 'react';
import { usePageDispatch, useSearchDispatch } from '../context';
import SearchBar from '@components/search/SearchBar';
import Styled from './SearchInput.styled';

const SearchInput = () => {
  const searchDispatch = useSearchDispatch();
  const pageDispatch = usePageDispatch();

  const setKeyword = React.useCallback((keyword: string) => {
    searchDispatch({ type: 'SET_KEYWORD', keyword: keyword });
    pageDispatch({ type: 'SET_PAGE', value: false });
  }, []);

  return (
    <Styled.container>
      <SearchBar onSearchClick={setKeyword} placeholder={'검색어를 입력해주세요'} />
    </Styled.container>
  );
};

export default React.memo(SearchInput);
