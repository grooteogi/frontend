import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Hashtag from './index';

export default {
  title: 'Components/Hashtag',
  component: Hashtag,
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = args => (
  <GlobalThemeProvider theme={theme}>
    <Hashtag {...args} />
  </GlobalThemeProvider>
);

export const Types = (args: ComponentStory<typeof Hashtag>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template content="#대학생활" clickable={true} {...args} />
      <Template content="#대학생활" removable={true} {...args} />
      <Template content="#편입" clickable={true} {...args} />
      <Template content="#편입" removable={true} {...args} />
    </GlobalThemeProvider>
  );
};
