import React, { useEffect, useRef, useState } from 'react';
import { Styled } from './HorizontalScroll.style';
import Image from 'next/image';
import SearchButton from '../../SearchButton';

interface HorizontalScrollProps {
  data: string[];
  value: string;
  onClick: (tagValue: string) => void;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ data, value, onClick }) => {
  const hScroll = useRef<HTMLDivElement>(null);
  const [slideLeft, setSlideLeft] = useState<number>(0);
  const [hideButtonLeft, setHideButtonLeft] = useState<boolean>(true);
  const [hideButtonRight, setHideButtonRight] = useState<boolean>(false);
  const [sliderWidth, setSliderWidth] = useState<number>(0);

  useEffect(() => {
    if (hScroll.current !== null) setSliderWidth(hScroll.current.scrollWidth - hScroll.current.offsetWidth);
  }, []);

  const moveRight = () => {
    if (hScroll.current !== null) setSlideLeft((hScroll.current.scrollLeft += 200));
  };

  const moveLeft = () => {
    if (hScroll.current !== null) setSlideLeft((hScroll.current.scrollLeft -= 200));
  };

  const onHScroll = () => {
    if (hScroll.current !== null) setSlideLeft(hScroll.current.scrollLeft);
    slideLeft > 0 ? setHideButtonLeft(false) : setHideButtonLeft(true);
    slideLeft < sliderWidth ? setHideButtonRight(false) : setHideButtonRight(true);
  };

  return (
    <Styled.container>
      <Styled.horizontalScroll ref={hScroll} onScroll={onHScroll}>
        {data.map(hash => {
          return <SearchButton hashtag={hash} onClick={onClick} clicked={value === hash} key={hash} />;
        })}
      </Styled.horizontalScroll>
      {slideLeft > 0 ? <LeftArrow onClick={moveLeft} hideButton={hideButtonLeft} /> : <></>}
      {slideLeft < sliderWidth ? <RightArrow onClick={moveRight} hideButton={hideButtonRight} /> : <></>}
    </Styled.container>
  );
};

interface ArrowProps {
  onClick: (e: React.MouseEvent) => void;
  hideButton: boolean;
}

const LeftArrow: React.FC<ArrowProps> = ({ onClick, hideButton }) => {
  return (
    <Styled.button onClick={onClick} disabled={hideButton} leftOrRight={'left'}>
      <Image src={'/logos/left.png'} alt={'arrow img not found'} width={'16px'} height={'16px'} quality={100} />
    </Styled.button>
  );
};

const RightArrow: React.FC<ArrowProps> = ({ onClick, hideButton }) => {
  return (
    <Styled.button onClick={onClick} disabled={hideButton} leftOrRight={'right'}>
      <Image src={'/logos/right.png'} alt={'arrow img not found'} width={'16px'} height={'16px'} quality={100} />
    </Styled.button>
  );
};

export default HorizontalScroll;
