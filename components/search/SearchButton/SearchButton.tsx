import React from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '@components/common/Typography';
import { fetchedHashtag } from 'types/fetchedData';

interface SearchButtonProp extends ButtonProps {
  fetchedTag: fetchedHashtag;
  onClick: (tagValue: string) => void;
  clicked: boolean;
}

const SearchButton: React.FC<SearchButtonProp> = ({ fetchedTag, onClick, clicked }) => {
  return (
    <Styled.button onClick={() => onClick(fetchedTag.tag)} clicked={clicked}>
      <Typography size={'sm'} color={'black'}>
        #{fetchedTag.tag}
      </Typography>
    </Styled.button>
  );
};

export default SearchButton;
