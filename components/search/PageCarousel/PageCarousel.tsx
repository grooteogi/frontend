import React from 'react';
import Carousel from '@components/common/Carousel';
import { usePageContext } from '../context';

const PageCarousel = () => {
  const pageContext = usePageContext();

  const imgLists = [
    {
      src: '/imgs/Carousel1.png',
      alt: '거기 대학생 새내기들~ 대학생활이 궁금해? 그루터기에서 선배들한테 물어봐!',
    },
    {
      src: '/imgs/Carousel2.png',
      alt: '그루터기 나무들과 다양한 경험을 공유해봐!',
    },
    {
      src: '/imgs/Carousel3.png',
      alt: '취업, 유학, 커리어가 고민될 땐? 그루터기면 OK!',
    },
  ];

  return pageContext ? <Carousel imgLists={imgLists} /> : null;
};
export default PageCarousel;
