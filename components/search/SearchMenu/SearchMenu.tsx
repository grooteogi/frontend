import React from 'react';
import { useSearchContext, useSearchDispatch } from '../context';
import { useHashtag } from '../usePosts';
import HorizontalScroll from './HorizontalScroll';
import Styled from './SearchMenu.styled';

const SearchMenu = () => {
  const searchState = useSearchContext();
  const searchDispatch = useSearchDispatch();

  const setHashtag = React.useCallback((hashtag: string) => {
    searchDispatch({ type: 'SET_HASHTAG', hashtag });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { hashtags: data, status } = useHashtag();
  console.log(data);
  // const data = [
  //   '학교생활',
  //   '대외활동',
  //   '소프트웨어',
  //   '개발자취업',
  //   '코딩테스트',
  //   '편입',
  //   '유학',
  //   '공무원준비',
  //   '토익',
  //   'PEET',
  // ];
  return (
    <Styled.container>
      {data !== undefined && <HorizontalScroll value={searchState.keyword} onClick={setHashtag} data={data} />}
    </Styled.container>
  );
};

export default React.memo(SearchMenu);
