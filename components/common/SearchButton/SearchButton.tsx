import React from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '@components/common/Typography';
import { fetchedHashtag } from 'types/fetchedHashtag';

interface SearchButtonProp extends ButtonProps {
  fetchedTag: fetchedHashtag;
  clicked: boolean;
  setClickedButtonId: (hashtagId: number) => void;
}

const SearchButton: React.FC<SearchButtonProp> = ({ fetchedTag, clicked, setClickedButtonId }) => {
  return (
    <Styled.button
      onClick={() => {
        setClickedButtonId(fetchedTag.id);
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
