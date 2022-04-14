import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme from '../../../styles/theme';

const carouselTheme = theme.style.carousel;
export const StyledCarouselItem = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export type SCarouselDevice = {
  device?: keyof typeof carouselTheme.width;
};

const getDevice = ({ device = 'md' }: SCarouselDevice) => {
  return css`
    width: ${carouselTheme.width[device]};
  `;
};

export const StyledCarousel = styled(Slider)<SCarouselDevice>`
  .slick-slide {
    margin: 0 auto;
  }
  .slick-list {
    ${getDevice};
    margin: 0 auto;
    border-radius: 8px;
  }
  .slick-track {
    overflow-x: hidden;
  }
  .slick-dots {
    bottom: 10px;
  }
`;
