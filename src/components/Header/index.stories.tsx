import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <GlobalThemeProvider theme={theme}>
    <Header {...args} />
  </GlobalThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  width: 70,
  height: 60,
};
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'test User',
  },
  ...Primary.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { ...Primary.args };
