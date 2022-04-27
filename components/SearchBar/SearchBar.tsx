import React, { useState } from 'react';
import Hashtag from '../Hashtag';
import Image from 'next/image';
import { Styled } from './SearchBar.styled';
import fetchedData from './data.json';
import Typography from '../Typography';
import { fetchedHashtag } from '@types/fetchedHashtag';

type fetchedDataType = {
  keyword: string;
};

interface InputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hashtags: fetchedHashtag[];
}

const SearchBar: React.FC<InputProps> = ({ hashtags, placeholder }) => {
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
    <Styled.container>
      <Styled.section>
        {hashtags.map(hashtag => {
          return <Hashtag key={hashtag.id} fetchedTag={hashtag} />;
        })}
        <Styled.input type={'text'} value={wordEntered} onChange={handleFilter} placeholder={placeholder} />
        <Image src={'/logos/search.png'} alt={'search icon not found'} width={'16px'} height={'16px'} />
      </Styled.section>
      {filteredData.length !== 0 && (
        <Styled.ul>
          {filteredData.map(item => {
            return (
              <Styled.li key={item.keyword}>
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
              </Styled.li>
            );
          })}
        </Styled.ul>
      )}
    </Styled.container>
  );
};

export default SearchBar;
