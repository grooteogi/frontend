import React, { useState } from 'react';
import { ButtonProps, Styled } from './SearchButton.styled';
import Typography from '../Typography';

interface SearchButtonProp extends ButtonProps {
  content: string;
}

const SearchButton: React.FC<SearchButtonProp> = ({ content }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Styled.button
      onClick={() => {
        setClicked(!clicked);
      }}
      clicked={clicked}
    >
      <Typography size={'sm'} color={'black'}>
        {content}
      </Typography>
    </Styled.button>
  );
};

export default SearchButton;
