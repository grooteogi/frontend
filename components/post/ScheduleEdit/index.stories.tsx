import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import ScheduleEdit from './index';

export default {
  title: 'Components/ScheduleEdit',
  component: ScheduleEdit,
} as ComponentMeta<typeof ScheduleEdit>;

export const CreatePost = (args: ComponentStory<typeof ScheduleEdit>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <ScheduleEdit />
    </GlobalThemeProvider>
  );
};
