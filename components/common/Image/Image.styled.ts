import theme from '@styles/theme';
import styled from '@emotion/styled';

export interface StyledImageProps {
  size: 'lg' | 'md' | 'sm';
}
const getSize = ({ size }: StyledImageProps) => {
  switch (size) {
    case 'lg':
      return `
      ${theme.responsive.mobile}{
        width: 180px;
        height: 150px;
      }
      ${theme.responsive.pc}{
        width: 235px;
        height: 200px;
      }
      ${theme.responsive.tablet}{
        width: 235px;
        height: 200px;
      }
      `;
    case 'md':
      return `
        width: 132px;
        height: 132px;
      `;
    case 'sm':
      return `
        width: 100px;
        height: 100px;
      `;
    default:
      return ``;
  }
};
export const Styled = {
  image: styled.img<StyledImageProps>`
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 8px;
    ${getSize}
  `,
};
