import React, { useState } from 'react';
import { ButtonProps, Styled } from './style';
import Typography from '../Typography';

interface SearchButtonProp extends ButtonProps {
  content: string;
}

const SearchButton = ({ content }: SearchButtonProp) => {
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
