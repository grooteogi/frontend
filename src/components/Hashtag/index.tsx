import React from 'react';
import { SHashtagProps, StyledButton } from './style';

interface HashtagProps extends SHashtagProps {
  onClick?: (e: React.MouseEvent) => void;
  keyword: string;
}

const Hashtag = ({ keyword, ...props }: HashtagProps) => {
  return <StyledButton {...props}>{keyword}</StyledButton>;
};

export default Hashtag;
