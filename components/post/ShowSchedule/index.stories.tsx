import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import ShowSchedule from './index';

export default {
  title: 'Components/ShowSchedule',
  component: ShowSchedule,
} as ComponentMeta<typeof ShowSchedule>;

export const DefaultShow = (args: ComponentStory<typeof ShowSchedule>) => {
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
      <ShowSchedule payMethod={'더치페이'} itemList={list} {...args} />
    </GlobalThemeProvider>
  );
};
export const MaxShow = (args: ComponentStory<typeof ShowSchedule>) => {
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
    {
      id: 4,
      startTime: '2022-04-26 9:00',
      endTime: '2022-04-26 11:45',
      location: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      id: 5,
      startTime: '2022-04-26 12:40',
      endTime: '2022-04-26 14:00',
      location: '합정',
      place: '망원동 티라미수',
    },
    {
      id: 6,
      startTime: '2022-04-27 10:30',
      endTime: '2022-04-27 14:00',
      location: '이대',
      place: '명지대 나라비',
    },
    {
      id: 7,
      startTime: '2022-04-26 9:00',
      endTime: '2022-04-26 11:45',
      location: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      id: 8,
      startTime: '2022-04-26 12:40',
      endTime: '2022-04-26 14:00',
      location: '합정',
      place: '망원동 티라미수',
    },
    {
      id: 9,
      startTime: '2022-04-27 10:30',
      endTime: '2022-04-27 14:00',
      location: '이대',
      place: '명지대 나라비',
    },
    {
      id: 10,
      startTime: '2022-04-26 9:00',
      endTime: '2022-04-26 11:45',
      location: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      id: 11,
      startTime: '2022-04-26 12:40',
      endTime: '2022-04-26 14:00',
      location: '합정',
      place: '망원동 티라미수',
    },
    {
      id: 12,
      startTime: '2022-04-27 10:30',
      endTime: '2022-04-27 14:00',
      location: '이대',
      place: '명지대 나라비',
    },
    {
      id: 13,
      startTime: '2022-04-26 9:00',
      endTime: '2022-04-26 11:45',
      location: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      id: 14,
      startTime: '2022-04-26 12:40',
      endTime: '2022-04-26 14:00',
      location: '합정',
      place: '망원동 티라미수',
    },
    {
      id: 15,
      startTime: '2022-04-27 10:30',
      endTime: '2022-04-27 14:00',
      location: '이대',
      place: '명지대 나라비',
    },
  ];
  return (
    <GlobalThemeProvider theme={theme}>
      <ShowSchedule payMethod={'더치페이'} itemList={list} {...args} />
    </GlobalThemeProvider>
  );
};
