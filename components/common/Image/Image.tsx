import React from 'react';
import { StyledImageProps, Styled } from './Image.styled';

interface ImageProps extends StyledImageProps {
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, size }) => {
  return <Styled.image src={src} alt={alt} size={size} />;
};
export default Image;
