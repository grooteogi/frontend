import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Carousel from './index';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const DefaultCarousel = (args: ComponentStory<typeof Carousel>) => {
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
    {
      src: '/imgs/Carousel3.png',
      alt: 'alt test carousel',
    },
    {
      src: '/imgs/Carousel4.png',
      link: 'https://www.naver.com',
    },
    {
      src: '/imgs/Carousel5.png',
    },
  ];
  return (
    <GlobalThemeProvider theme={theme}>
      <Carousel imgLists={imgLists} {...args} />
    </GlobalThemeProvider>
  );
};
