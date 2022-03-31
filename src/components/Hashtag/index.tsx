import React from 'react';
import { SButtonProps, StyledButton } from './style';

interface HashtagProps extends SButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  keyword: string;
}

const Hashtag = ({ keyword, ...props }: HashtagProps) => {
  return <StyledButton {...props}>{keyword}</StyledButton>;
};

export default Hashtag;
