import React from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '@components/common/Typography';

interface SearchButtonProp extends ButtonProps {
  hashtag: string;
  onClick: (tagValue: string) => void;
  clicked: boolean;
}

const SearchButton: React.FC<SearchButtonProp> = ({ hashtag, onClick, clicked }) => {
  return (
    <Styled.button onClick={() => (clicked ? onClick('') : onClick(hashtag))} clicked={clicked}>
      <Typography size={'sm'} color={'black'}>
        #{hashtag}
      </Typography>
    </Styled.button>
  );
};

export default SearchButton;
