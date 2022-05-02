import React, { useEffect, useRef, useState } from 'react';
import { Styled } from './SearchMenu.style';
import Image from 'next/image';
import SearchButton from '@components/common/SearchButton';
import { fetchedHashtag } from 'types/fetchedHashtag';

interface SearchMenuProps {
  data: fetchedHashtag[];
  onClick: (hashtag: fetchedHashtag, clicked: boolean) => void;
}

const SearchMenu: React.FC<SearchMenuProps> = ({ data, onClick }) => {
  const hScroll = useRef<any>();
  const [slideLeft, setSlideLeft] = useState<number>(0);
  const [hideButtonLeft, setHideButtonLeft] = useState<boolean>(true);
  const [hideButtonRight, setHideButtonRight] = useState<boolean>(false);
  const [sliderWidth, setSliderWidth] = useState<number>(0);

  useEffect(() => {
    setSliderWidth(hScroll.current.scrollWidth - hScroll.current.offsetWidth);
  }, []);

  const moveRight = () => {
    setSlideLeft((hScroll.current.scrollLeft += 200));
  };

  const moveLeft = () => {
    setSlideLeft((hScroll.current.scrollLeft -= 200));
  };

  const onHScroll = () => {
    setSlideLeft(hScroll.current.scrollLeft);
    slideLeft > 0 ? setHideButtonLeft(false) : setHideButtonLeft(true);
    slideLeft < sliderWidth ? setHideButtonRight(false) : setHideButtonRight(true);
  };

  return (
    <Styled.container>
      <Styled.horizontalScroll ref={hScroll} onScroll={onHScroll}>
        {data.map(hash => {
          return <SearchButton key={hash.id} fetchedTag={hash} onClick={onClick} />;
        })}
      </Styled.horizontalScroll>
      {slideLeft > 0 ? <LeftArrow onClick={moveLeft} hideButton={hideButtonLeft} /> : <></>}
      {slideLeft < sliderWidth ? <RightArrow onClick={moveRight} hideButton={hideButtonRight} /> : <></>}
    </Styled.container>
  );
};

interface arrowProps {
  onClick: (e: React.MouseEvent) => void;
  hideButton: boolean;
}

const LeftArrow: React.FC<arrowProps> = ({ onClick, hideButton }) => {
  return (
    <Styled.button onClick={onClick} disabled={hideButton} leftOrRight={'left'}>
      <Image src={'/logos/left.png'} alt={'arrow img not found'} width={'16px'} height={'16px'} quality={100} />
    </Styled.button>
  );
};

const RightArrow: React.FC<arrowProps> = ({ onClick, hideButton }) => {
  return (
    <Styled.button onClick={onClick} disabled={hideButton} leftOrRight={'right'}>
      <Image src={'/logos/right.png'} alt={'arrow img not found'} width={'16px'} height={'16px'} quality={100} />
    </Styled.button>
  );
};

export default SearchMenu;
