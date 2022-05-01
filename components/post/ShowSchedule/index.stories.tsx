import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import MeetingSchedule from './index';

export default {
  title: 'Components/ShowSchedule',
  component: MeetingSchedule,
} as ComponentMeta<typeof MeetingSchedule>;

export const DefaultShow = (args: ComponentStory<typeof MeetingSchedule>) => {
  const list = [
    {
      id: 1,
      startTime: '2022-04-26 9:00',
      endTime: '2022-04-26 11:45',
      location: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      id: 2,
      startTime: '2022-04-26 12:40',
      endTime: '2022-04-26 14:00',
      location: '합정',
      place: '망원동 티라미수',
    },
    {
      id: 3,
      startTime: '2022-04-27 10:30',
      endTime: '2022-04-27 14:00',
      location: '이대',
      place: '명지대 나라비',
    },
  ];
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingSchedule payMethod={'더치페이'} liked={false} itemList={list} {...args} />
    </GlobalThemeProvider>
  );
};
export const DefaultSelect = (args: ComponentStory<typeof MeetingSchedule>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <MeetingSchedule {...args} />
    </GlobalThemeProvider>
  );
};
