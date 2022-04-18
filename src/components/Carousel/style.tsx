import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import theme from '../../../styles/theme';

export const Styled = {
  container: styled(Slider)`
    .slick-list {
      width: 100vw;
      height: 30vh;
      height: fit-content;
      border-radius: 8px;
    }
    @media screen and (min-width: 768px) {
      .slick-list {
        width: 85vw;
        border-radius: 8px;
      }
    }
    @media screen and (min-width: 1060px) {
      .slick-list {
        width: 60vw;
      }
    }
    .slick-slide {
      margin: 0 auto;
    }
    .slick-track {
      overflow-x: hidden;
    }
    .slick-dots {
      bottom: 10px;
      padding: 0;
    }
    .slick-dots li button,
    .slick-dots li button:before,
    .slick-dots li button:focus:before,
    .slick-dots li button:hover:before {
      color: ${theme.style.deepgray};
      opacity: 0.5;
    }
    .slick-dots li button:hover,
    .slick-dots li.slick-active button:hover {
      opacity: 1;
    }
    .slick-dots li.slick-active button,
    .slick-dots li.slick-active button:focus,
    .slick-dots li.slick-active button:before {
      opacity: 0.75;
    }
  `,
  item: styled.img`
    cursor: pointer;
    width: 100vw;
    height: 30vh;
    object-fit: none;
    @media screen and (min-width: 600px) {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  `,
};

export default Styled;
