import React from 'react';
import { ContainerProps, Container } from './style';

interface BoxProps extends ContainerProps {
  image: typeof Image;
  children: JSX.Element | JSX.Element[];
}

const PostCard = ({ image, children, ...props }: BoxProps) => {
  return (
    <Container {...props}>
      {image}
      {children}
    </Container>
  );
};

export default PostCard;
