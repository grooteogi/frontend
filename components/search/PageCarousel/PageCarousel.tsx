import Carousel from '@components/common/Carousel';
import Image from '@components/common/Image';

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
  return <Image src={'/imgs/Carousel1.png'} size={'lg'} />;
};
export default PageCarousel;
