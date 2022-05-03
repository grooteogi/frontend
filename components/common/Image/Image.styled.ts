import styled from '@emotion/styled';

export interface imageProps {
  width: string;
  height: string;
  objectFit: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
}

export const Styled = {
  image: styled.img<imageProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: ${props => props.objectFit};
  `,
};
