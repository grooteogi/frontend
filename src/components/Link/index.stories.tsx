import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Link from './index';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <GlobalThemeProvider theme={theme}>
    <Link {...args} />
  </GlobalThemeProvider>
);

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  content: '회원가입하기',
  fontColor: 'primary',
  href: '',
  fontSize: 16,
};
export const GrayLink = Template.bind({});
GrayLink.args = {
  content: '회원가입하기',
  fontColor: 'lightgrey',
  href: '',
  fontSize: 16,
};
