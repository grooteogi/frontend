import React from 'react';
import Styled from './Carousel.style';
import 'antd/dist/antd.css';

export type ImgItem = {
  src: string;
  alt?: string;
  link?: string;
};

export interface CarouselProps {
  imgLists: ImgItem[];
  ondbClick?: (e: React.MouseEvent) => void;
}

const Carousel: React.FC<CarouselProps> = ({ ondbClick, imgLists }) => {
  let idx = 0;
  return (
    <Styled.carousel autoplay dotPosition={'bottom'}>
      {imgLists.map(({ src, alt = '', link }: ImgItem) => (
        <div key={idx++}>
          <a href={link && link}>
            <Styled.item src={src} onDoubleClick={ondbClick} alt={alt && alt} />
          </a>
        </div>
      ))}
    </Styled.carousel>
  );
};

export default Carousel;
