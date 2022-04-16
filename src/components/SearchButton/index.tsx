import React, { useState } from 'react';
import { SButtonProps, StyledButton } from './style';
import Typography from '../Typography';

interface SearchButtonProp extends SButtonProps {
  content: string;
}

const SearchButton = ({ content }: SearchButtonProp) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <StyledButton
      onClick={() => {
        setClicked(!clicked);
      }}
      clicked={clicked}
    >
      <Typography size={'sm'} color={'black'}>
        {content}
      </Typography>
    </StyledButton>
  );
};

export default SearchButton;
