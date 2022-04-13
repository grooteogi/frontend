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

export const Signin = Template.bind({});
Signin.args = {
  device: 'md' as const,
  user: {
    name: 'test User',
  },
};
export const Signout = Template.bind({});
Signout.args = {
  device: 'md' as const,
};
export const MobileSignin = Template.bind({});
MobileSignin.args = {
  device: 'sm' as const,
  user: {
    name: 'test User',
  },
};
export const MobileSignout = Template.bind({});
MobileSignout.args = {
  device: 'sm' as const,
};
