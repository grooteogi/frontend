import React from 'react';
import { SCarouselDevice, StyledCarousel, StyledCarouselItem } from './style';

export type ImgItem = {
  src: string;
  alt?: string;
  ondbClick?: (e: React.MouseEvent) => void;
};

export interface CarouselProps extends SCarouselDevice {
  imgLists: ImgItem[];
}

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '-3px',
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
      },
    },
  ],
};

const Carousel = ({ device, imgLists }: CarouselProps) => {
  let idx = 0;
  return (
    <StyledCarousel device={device} {...settings}>
      {imgLists.map(({ src, alt, ondbClick }: ImgItem) => (
        <div key={idx++}>
          <StyledCarouselItem src={src} onDoubleClick={ondbClick} alt={alt} />
        </div>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
