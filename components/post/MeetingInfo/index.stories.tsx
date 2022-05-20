import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreditType, HashtagEntity } from 'types/entity';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import MeetingInfo from './index';

export default {
  title: 'Components/MeetingInfo',
  component: MeetingInfo,
} as ComponentMeta<typeof MeetingInfo>;

export const PostImgHBig = (args: ComponentStory<typeof MeetingInfo>) => {
  const sampleHashtags: HashtagEntity[] = [
    { hashtagId: 1, name: '대학생활' },
    { hashtagId: 2, name: '편입' },
  ];
  const meetingInfo = {
    postId: 1,
    title: '포스트의 타이틀은 이렇게 들어오겠죠?',
    content:
      '포스트의 컨텐츠, 그러니까 멘토들이 자신의 약속에 대한 상세설명을 말하고 자신의 생각을 게시하며 미리 공지해야할 내용을 적어두고싶을때 해당 부분에 이렇게 길게 많은 내용을 적을 것 같네요!',
    imageUrl: '/imgs/RotatedImg.png',
    createAt: '2022-04-28 18:32',
    hashtags: sampleHashtags,
    creditType: CreditType.DIRECT,
    likes: true, // TODO : 논의 필요 ( back: 0, 1 )
    mentor: {
      userId: 100000,
      nickname: '탐이나 냐옹',
      imageUrl: '/imgs/Carousel2.png',
    },
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingInfo {...meetingInfo} {...args} />
    </GlobalThemeProvider>
  );
};
export const PostImgWBig = (args: ComponentStory<typeof MeetingInfo>) => {
  const sampleHashtags: HashtagEntity[] = [
    { hashtagId: 1, name: '대학생활' },
    { hashtagId: 2, name: '편입' },
  ];
  const meetingInfo = {
    postId: 1,
    title: '포스트의 타이틀은 이렇게 들어오겠죠?',
    content:
      '포스트의 컨텐츠, 그러니까 멘토들이 자신의 약속에 대한 상세설명을 말하고 자신의 생각을 게시하며 미리 공지해야할 내용을 적어두고싶을때 해당 부분에 이렇게 길게 많은 내용을 적을 것 같네요!',
    imageUrl: '/imgs/Carousel2.png',
    createAt: '2022-04-28 18:32',
    hashtags: sampleHashtags,
    creditType: CreditType.DIRECT,
    likes: true, // TODO : 논의 필요 ( back: 0, 1 )
    mentor: {
      userId: 100000,
      nickname: '탐이나 냐옹',
      imageUrl: '/imgs/Carousel2.png',
    },
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingInfo {...meetingInfo} {...args} />
    </GlobalThemeProvider>
  );
};
