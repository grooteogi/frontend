import { useSearchContext } from '../context';
import HorizontalScroll from './HorizontalScroll';
import Styled from './SearchMenu.styled';

const SearchMenu = () => {
  const { searchState, setKeyword, setSort, setRegion } = useSearchContext();
  const data = [
    '학교생활',
    '대외활동',
    '소프트웨어',
    '개발자취업',
    '코딩테스트',
    '편입',
    '유학',
    '공무원준비',
    '토익',
    'PEET',
  ];

  return (
    <Styled.container>
      <HorizontalScroll value={searchState.keyword} onClick={setKeyword} data={data} />
    </Styled.container>
  );
};

export default SearchMenu;
