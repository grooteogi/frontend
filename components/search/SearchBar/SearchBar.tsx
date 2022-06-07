import React, { useState } from 'react';
import { Styled } from './SearchBar.styled';
import Typography from '@components/common/Typography';
import { useRouter } from 'next/router';
import { useSearchContext } from '../context';

//prettier-ignore
const fetchedData = [ { keyword: '개발공부' }, { keyword: '길잡이' }, { keyword: '네카라쿠배' }, { keyword: '네카라쿠배당토' }, { keyword: '대학생활' }, { keyword: '대학원진학' }, { keyword: '인공지능' }, { keyword: '코딩' }, { keyword: '코딩테스트' }, { keyword: '면접' }, { keyword: '직무면접' }, { keyword: '취업준비' }, { keyword: '포트폴리오' }, { keyword: '자기소개서' }, { keyword: '자기개발' },
  { keyword: '토익' }, { keyword: '토익' }, { keyword: '토플' }, { keyword: '동아리' }, { keyword: '연합동아리' }, { keyword: '선배' }, { keyword: '후배' }, { keyword: '프로젝트' }, { keyword: '졸업논문' }, { keyword: '석사' }, { keyword: '인턴십' }, { keyword: '인턴프로그램' }, { keyword: '프론트엔드' }, { keyword: '백엔드' },
];

type fetchedDataType = {
  keyword: string;
};

export interface InputProps {
  onSearchClick: (keyword: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<InputProps> = ({ onSearchClick, placeholder }) => {
  const [filteredData, setFilteredData] = useState<fetchedDataType[]>([]);
  const [keyword, setKeyword] = useState<string>('');

  const router = useRouter();

  const [focus, setFocus] = useState<boolean>(false);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setKeyword(searchWord);
    const newFilter = fetchedData.filter(value => {
      return value.keyword.includes(searchWord);
    });
    searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter);
  };

  return (
    <Styled.container>
      <Styled.section>
        <Styled.input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          type={'text'}
          value={keyword}
          onChange={handleFilter}
          placeholder={placeholder}
        />
        <Styled.image
          src={'/logos/search.png'}
          alt={'search icon not found'}
          width={'16px'}
          height={'16px'}
          onClick={() => {
            setKeyword(keyword);
            router.push({ pathname: '/search/result', query: { searchKeyword: keyword } });
          }}
        />
      </Styled.section>
      {focus && filteredData.length !== 0 && (
        <Styled.ul>
          {filteredData.map(item => (
            <Styled.li key={item.keyword}>
              <Styled.listText
                onMouseDown={() => {
                  router.push({ pathname: '/search/result', query: { searchKeyword: item.keyword } });
                }}
              >
                <Typography size={'sm'} color={'black'}>
                  {item.keyword}
                </Typography>
              </Styled.listText>
              <Styled.image
                src="/logos/arrow-up.png"
                alt="arrow icon not found"
                width={'12x'}
                height={'12px'}
                onMouseDown={() => {
                  setKeyword(item.keyword);
                  setFilteredData([]);
                }}
              />
            </Styled.li>
          ))}
        </Styled.ul>
      )}
    </Styled.container>
  );
};

export default SearchBar;
