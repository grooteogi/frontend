import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import ReviewList from './index';

export default {
  title: 'Components/ReviewList',
  component: ReviewList,
} as ComponentMeta<typeof ReviewList>;

export const Default = (args: ComponentStory<typeof ReviewList>) => {
  const list = [
    {
      name: '졸리다',
      src: '/imgs/Carousel1.png',
      time: '2022-4-02 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
      name: '지금은 새벽 3시',
      src: '/imgs/Carousel2.png',
      time: '2022-4-02 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
      name: '왜 에러떠',
      src: '/imgs/Carousel3.png',
      time: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
  ];
  return (
    <GlobalThemeProvider theme={theme}>
      <ReviewList reviewList={list} {...args} />
    </GlobalThemeProvider>
  );
};
export const NoReview = (args: ComponentStory<typeof ReviewList>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <ReviewList reviewList={[]} {...args} />
    </GlobalThemeProvider>
  );
};
