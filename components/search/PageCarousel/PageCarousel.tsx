import React from 'react';
import Carousel from '@components/common/Carousel';
import { usePageContext } from '../context';

const PageCarousel = () => {
  const pageContext = usePageContext();

  const imgLists = [
    {
      src: '/imgs/Carousel1.png',
      alt: 'img for test link',
      link: 'https://www.google.com/?gws_rd=ssl',
    },
    {
      src: '/imgs/Carousel2.png',
      alt: 'sad carousel',
      link: '',
    },
  ];

  return pageContext ? <Carousel imgLists={imgLists} /> : null;
};
export default PageCarousel;
