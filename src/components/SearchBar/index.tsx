import React, { useState } from 'react';
import Hashtag from '../Hashtag';
import Image from 'next/image';
import { AutoSearchContainer, AutoSearchData, AutoSearchWrap, InputContainer, StyledInput } from './style';
import fetchedData from './data.json';
import Typography from '../Typography';

type fetchedDataType = {
  keyword: string;
};

export type Hashtag = {
  id: number;
  hashtagType: 'PERSONALITY' | 'CONCERN';
  tag: string;
  registered: string;
};

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hashtags: Hashtag[];
}

const SearchBar = ({ hashtags, placeholder }: InputProps) => {
  const [filteredData, setFilteredData] = useState<fetchedDataType[]>([]);
  const [wordEntered, setWordEntered] = useState<string>('');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = fetchedData.filter(value => {
      return value.keyword.includes(searchWord);
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <AutoSearchContainer>
      <InputContainer>
        {hashtags.map(hashtag => {
          return <Hashtag key={hashtag.id} content={hashtag.tag} />;
        })}
        <StyledInput type={'text'} value={wordEntered} onChange={handleFilter} placeholder={placeholder} />
        <Image src={'/logos/search.png'} alt={'search icon not found'} width={'16px'} height={'16px'} />
      </InputContainer>
      {filteredData.length !== 0 && (
        <AutoSearchWrap>
          {filteredData.map(item => {
            return (
              <AutoSearchData key={item.keyword}>
                <Typography size={'sm'} color={'black'}>
                  {item.keyword}
                </Typography>
                <Image
                  src="/logos/arrow-up.png"
                  alt="arrow icon not found"
                  width={'12x'}
                  height={'12px'}
                  onClick={() => {
                    setWordEntered(item.keyword);
                    setFilteredData([]);
                  }}
                />
              </AutoSearchData>
            );
          })}
        </AutoSearchWrap>
      )}
    </AutoSearchContainer>
  );
};

export default SearchBar;
