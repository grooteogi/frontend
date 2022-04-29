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
<<<<<<< HEAD
<<<<<<< HEAD
      id: 1,
=======
>>>>>>> e090ca8 (refactor : Refactor style)
=======
      id: 1,
>>>>>>> 3cf1d40 (refactor: Change the map key from the idx++ format to the received format)
      username: '졸리다',
      userProfilePicSrc: '/imgs/Carousel1.png',
      time: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      id: 2,
=======
>>>>>>> e090ca8 (refactor : Refactor style)
=======
      id: 2,
>>>>>>> 3cf1d40 (refactor: Change the map key from the idx++ format to the received format)
      username: '지금은 새벽 3시',
      userProfilePicSrc: '/imgs/Carousel2.png',
      time: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      id: 3,
=======
>>>>>>> e090ca8 (refactor : Refactor style)
=======
      id: 3,
>>>>>>> 3cf1d40 (refactor: Change the map key from the idx++ format to the received format)
      username: '왜 에러떠',
      userProfilePicSrc: '/imgs/Carousel3.png',
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
