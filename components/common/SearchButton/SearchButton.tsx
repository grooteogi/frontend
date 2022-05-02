import React, { useState } from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '@components/common/Typography';
import { fetchedHashtag } from 'types/fetchedHashtag';

interface SearchButtonProp extends ButtonProps {
  fetchedTag: fetchedHashtag;
  onClick?: (hashtag: fetchedHashtag, clicked: boolean) => void;
}

const SearchButton: React.FC<SearchButtonProp> = ({ fetchedTag, onClick }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Styled.button
      onClick={() => {
        onClick && onClick(fetchedTag, clicked);
        setClicked(!clicked);
      }}
      clicked={clicked}
    >
      <Typography size={'sm'} color={'black'}>
        #{fetchedTag.tag}
      </Typography>
    </Styled.button>
  );
};

export default SearchButton;
