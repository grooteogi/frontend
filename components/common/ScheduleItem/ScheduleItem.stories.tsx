import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import ScheduleItem from './index';

export default {
  title: 'Components/ScheduleItem',
  component: ScheduleItem,
} as ComponentMeta<typeof ScheduleItem>;

const Template: ComponentStory<typeof ScheduleItem> = args => (
  <GlobalThemeProvider theme={theme}>
    <ScheduleItem {...args} />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  date: '2022-04-04',
  startTime: '10:00',
  endTime: '12:00',
  place: '신촌 아무 식당',
  region: '신촌',
};
