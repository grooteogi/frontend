import styled from '@emotion/styled';

export interface StyledImageProps {
  width?: string;
  height?: string;
  objectFit: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
}

export const Styled = {
  image: styled.img<StyledImageProps>`
    width: ${props => (props.width ? props.width : '100%')};
    height: ${props => (props.height ? props.height : '100%')};
    object-fit: ${props => props.objectFit};
  `,
};
