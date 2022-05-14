import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import MeetingInfoEdit from './index';

export default {
  title: 'Components/MeetingInfoEdit',
  component: MeetingInfoEdit,
} as ComponentMeta<typeof MeetingInfoEdit>;

export const CreateMeetingInfo = (args: ComponentStory<typeof MeetingInfoEdit>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingInfoEdit />
    </GlobalThemeProvider>
  );
};
export const EditMeetingInfo = (args: ComponentStory<typeof MeetingInfoEdit>) => {
  const postInfo = {
    title: '즐거운 코딩시간. 오늘도 만든다 작업물',
    imageUrl: '/imgs/Carousel2.png',
    content:
      '이것은 어쩌구저쩌구 내용입니다. 저는 지금 학교인데 우리 학교 왜이리 변했어요. 내가 알던 우리 학교가 아니야... 추억이 가득 담긴 노랑통닭',
    hashtags: [],
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingInfoEdit {...postInfo} {...args} />
    </GlobalThemeProvider>
  );
};
