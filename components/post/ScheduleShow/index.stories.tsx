import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import ShowSchedule from './index';

export default {
  title: 'Components/ShowSchedule',
  component: ShowSchedule,
} as ComponentMeta<typeof ShowSchedule>;

export const MaxShow = (args: ComponentStory<typeof ShowSchedule>) => {
  const schedules = [
    {
      scheduleId: 1,
      date: '2022-04-18',
      startTime: '12:00',
      endTime: '14:00',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 2,
      date: '2022-04-19',
      startTime: '12:00',
      endTime: '14:00',
      region: '합정',
      place: '망원동 티라미수',
    },
    {
      scheduleId: 3,
      date: '2022-04-20',
      startTime: '12:00',
      endTime: '14:00',
      region: '이대',
      place: '명지대 나라비',
    },
    {
      scheduleId: 4,
      date: '2022-04-21',
      startTime: '12:00',
      endTime: '14:00',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 5,
      date: '2022-04-22',
      startTime: '12:00',
      endTime: '14:00',
      region: '합정',
      place: '망원동 티라미수',
    },
    {
      scheduleId: 6,
      date: '2022-04-23',
      startTime: '12:00',
      endTime: '14:00',
      region: '이대',
      place: '명지대 나라비',
    },
    {
      scheduleId: 7,
      date: '2022-04-24',
      startTime: '14:00',
      endTime: '16:00',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 8,
      date: '2022-04-24',
      startTime: '12:00',
      endTime: '14:00',
      region: '합정',
      place: '망원동 티라미수',
    },
    {
      scheduleId: 9,
      date: '2022-04-25',
      startTime: '15:00',
      endTime: '17:45',
      region: '이대',
      place: '명지대 나라비',
    },
    {
      scheduleId: 10,
      date: '2022-04-26',
      startTime: '12:00',
      endTime: '14:00',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 11,
      date: '2022-04-26',
      startTime: '9:00',
      endTime: '11:45',
      region: '합정',
      place: '망원동 티라미수',
    },
    {
      scheduleId: 12,
      date: '2022-04-25',
      startTime: '9:00',
      endTime: '11:45',
      region: '이대',
      place: '명지대 나라비',
    },
    {
      scheduleId: 13,
      date: '2022-04-26',
      startTime: '9:00',
      endTime: '11:45',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 14,
      date: '2022-04-26',
      startTime: '12:30',
      endTime: '14:00',
      region: '합정',
      place: '망원동 티라미수',
    },
    {
      scheduleId: 15,
      date: '2022-04-27',
      startTime: '10:30',
      endTime: '14:00',
      region: '이대',
      place: '명지대 나라비',
    },
  ];
  return (
    <GlobalThemeProvider theme={theme}>
      <ShowSchedule schedules={schedules} {...args} />
    </GlobalThemeProvider>
  );
};
