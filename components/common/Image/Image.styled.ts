import styled from '@emotion/styled';

export interface StyledImageProps {
  size: 'lg' | 'md' | 'sm';
}
const getSize = ({ size }: StyledImageProps) => {
  if (size === 'lg')
    return `
    @media (max-width: 767px) {
      width: 180px;
      height: 150px;
    }
    width: 235px;
    height: 200px;
  `;
  if (size === 'md')
    return `
    width: 132px;
    height: 132px;
  `;
  if (size === 'sm')
    return `
    width: 100px;
    height: 100px;
  `;
};
export const Styled = {
  image: styled.img<StyledImageProps>`
    ${getSize}
    object-fit: cover;
    object-position: 50% 50%;
  `,
};
