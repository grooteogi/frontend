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
  return (
    <GlobalThemeProvider theme={theme}>
      <Carousel imgLists={imgLists} {...args} />
    </GlobalThemeProvider>
  );
};
