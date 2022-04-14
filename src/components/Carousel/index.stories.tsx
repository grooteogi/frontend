import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Carousel from './index';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const DefaultCarousel = (args: ComponentStory<typeof Carousel>) => {
  const imgLists = [
    {
      src: '/imgs/Carousel1.png',
      alt: 'happy carousel',
      ondbClick: () => {
        alert('Carousel');
      },
    },
    {
      src: '/imgs/Carousel2.png',
      alt: 'sad carousel',
      ondbClick: () => {
        alert('Carousel2');
      },
    },
    {
      src: '/imgs/Carousel3.png',
      alt: 'haha carousel',
      ondbClick: () => {
        alert('Carousel3');
      },
    },
    {
      src: '/imgs/Carousel4.png',
      alt: 'haha caroul',
      ondbClick: () => {
        alert('Carousel4');
      },
    },
  ];
  return (
    <GlobalThemeProvider theme={theme}>
      <Carousel imgLists={imgLists} device={'lg'} {...args} />
    </GlobalThemeProvider>
  );
};
