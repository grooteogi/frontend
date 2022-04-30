import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import { fetchedHashtag } from '../../../types/fetchedHashtag';
import MeetingInfo from './index';

export default {
  title: 'Components/MeetingInfo',
  component: MeetingInfo,
} as ComponentMeta<typeof MeetingInfo>;

export const PostImgHBig = (args: ComponentStory<typeof MeetingInfo>) => {
  const sampleHashtags: fetchedHashtag[] = [
    { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
    { id: 2, hashtagType: 'CONCERN', tag: '편입', registered: '' },
  ];
  const postInfo = {
    postPicSrc: '/imgs/RotatedImg.png',
    postTitle: '즐거운 코딩시간. 오늘도 만든다 작업물',
    userPicSrc: '/imgs/Carousel2.png',
    username: '대외활동 마스터',
    location: '서울 · 서대문구',
    hashtags: sampleHashtags,
    description:
      '이것은 어쩌구저쩌구 내용입니다. 저는 지금 학교인데 우리 학교 왜이리 변했어요. 내가 알던 우리 학교가 아니야... 추억이 가득 담긴 노랑통닭',
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingInfo {...postInfo} {...args} />
    </GlobalThemeProvider>
  );
};
export const PostImgWBig = (args: ComponentStory<typeof MeetingInfo>) => {
  const sampleHashtags: fetchedHashtag[] = [
    { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
    { id: 2, hashtagType: 'CONCERN', tag: '편입', registered: '' },
  ];
  const postInfo = {
    postPicSrc: '/imgs/Carousel4.png',
    postTitle: '즐거운 코딩시간. 오늘도 만든다 작업물',
    userPicSrc: '/imgs/Carousel2.png',
    username: '대외활동 마스터',
    location: '서울 · 서대문구',
    hashtags: sampleHashtags,
    description:
      '이것은 어쩌구저쩌구 내용입니다. 저는 지금 학교인데 우리 학교 왜이리 변했어요. 내가 알던 우리 학교가 아니야... 추억이 가득 담긴 노랑통닭',
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingInfo {...postInfo} {...args} />
    </GlobalThemeProvider>
  );
};
