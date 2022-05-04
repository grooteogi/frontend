import styled from '@emotion/styled';

export interface StyledImageProps {
  width: string;
  height: string;
  objectFit: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
}

export const Styled = {
  image: styled.img<StyledImageProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: ${props => props.objectFit};
  `,
};
