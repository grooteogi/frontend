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
      <CreateSchedule />
    </GlobalThemeProvider>
  );
};
