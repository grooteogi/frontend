import React from 'react';
import { StyledCarousel, StyledCarouselItem } from './style';

export type ImgItem = {
  src: string;
  alt?: string;
  link?: string;
};

export interface CarouselProps {
  imgLists: ImgItem[];
  ondbClick?: (e: React.MouseEvent) => void;
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
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
      },
    },
  ],
};

const Carousel = ({ ondbClick, imgLists }: CarouselProps) => {
  let idx = 0;
  return (
    <>
      <StyledCarousel {...settings}>
        {imgLists.map(({ src, alt, link }: ImgItem) => (
          <div key={idx++}>
            <a href={link}>
              <StyledCarouselItem src={src} onDoubleClick={ondbClick} alt={alt} />
            </a>
          </div>
        ))}
      </StyledCarousel>
    </>
  );
};

export default Carousel;
