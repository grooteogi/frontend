import React from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '@components/common/Typography';
import { HashtagEntity } from 'types/entity';

interface SearchButtonProp extends ButtonProps {
  fetchedTag: HashtagEntity;
  onClick: (tagValue: string) => void;
  clicked: boolean;
}

const SearchButton: React.FC<SearchButtonProp> = ({ fetchedTag, onClick, clicked }) => {
  return (
    <Styled.button onClick={() => (clicked ? onClick('') : onClick(fetchedTag.name))} clicked={clicked}>
      <Typography size={'sm'} color={'black'}>
        #{fetchedTag.name}
      </Typography>
    </Styled.button>
  );
};

export default SearchButton;
