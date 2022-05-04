import React from 'react';
import { StyledImageProps, Styled } from './Image.styled';

interface ImageProps extends StyledImageProps {
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, objectFit }) => {
  return <Styled.image src={src} alt={alt} width={width} height={height} objectFit={objectFit} />;
};
export default Image;
