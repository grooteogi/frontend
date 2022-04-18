import React from 'react';
import Styled from './Carousel.style';

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

const Carousel: React.FC<CarouselProps> = ({ ondbClick, imgLists }) => {
  let idx = 0;
  return (
    <Styled.container {...settings}>
      {imgLists.map(({ src, alt = '', link }: ImgItem) => (
        <div key={idx++}>
          <a href={link && link}>
            <Styled.item src={src} onDoubleClick={ondbClick} alt={alt && alt} />
          </a>
        </div>
      ))}
    </Styled.container>
  );
};

export default Carousel;
