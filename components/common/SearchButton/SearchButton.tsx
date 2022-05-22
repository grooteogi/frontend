import React from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '@components/common/Typography';
import { HashtagEntity } from 'types/entity';

interface SearchButtonProp extends ButtonProps {
  fetchedTag: HashtagEntity;
  clicked: boolean;
  setClickedButtonId: (hashtagId: number) => void;
}

const SearchButton: React.FC<SearchButtonProp> = ({ fetchedTag, clicked, setClickedButtonId }) => {
  return (
    <Styled.button
      onClick={() => {
        setClickedButtonId(fetchedTag.hashtagId);
      }}
      clicked={clicked}
    >
      <Typography size={'sm'} color={'black'}>
        #{fetchedTag.name}
      </Typography>
    </Styled.button>
  );
};

export default SearchButton;
