import Carousel from '@components/common/Carousel';
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
const PageCarousel = () => {
  return <Carousel imgLists={imgLists} />;
};
export default PageCarousel;
