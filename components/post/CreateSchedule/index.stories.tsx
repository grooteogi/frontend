import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import CreateSchedule from './index';

export default {
  title: 'Components/CreateSchedule',
  component: CreateSchedule,
} as ComponentMeta<typeof CreateSchedule>;

export const CreatePost = (args: ComponentStory<typeof CreateSchedule>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <CreateSchedule payMethod="더치페이" {...args} />
    </GlobalThemeProvider>
  );
};
export const EditPost = (args: ComponentStory<typeof CreateSchedule>) => {
  const scheduleInfo = {
    payMethod: '더치페이',
    region: '마포구',
    itemList: [
      {
        id: 1,
        date: '2022-04-26',
        startTime: '9:00',
        endTime: '11:45',
        region: '신촌',
        place: '신촌근처 아무 식당 (협의)',
      },
      {
        id: 2,
        date: '2022-04-27',
        startTime: '12:40',
        endTime: '14:00',
        region: '합정',
        place: '망원동 티라미수',
      },
      {
        id: 3,
        date: '2022-04-28',
        startTime: '10:30',
        endTime: '14:00',
        region: '이대',
        place: '명지대 나라비',
      },
      {
        id: 4,
        date: '2022-04-24',
        startTime: '16:40',
        endTime: '20:00',
        region: '합정',
        place: '망원동 티라미수',
      },
      {
        id: 5,
        date: '2022-04-25',
        startTime: '10:30',
        endTime: '14:00',
        region: '이대',
        place: '명지대 나라비',
      },
    ],
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <CreateSchedule {...scheduleInfo} {...args} />
    </GlobalThemeProvider>
  );
};
