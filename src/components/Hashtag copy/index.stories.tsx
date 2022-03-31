import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Link from './index';

export default {
  title: 'Containers/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <GlobalThemeProvider theme={theme}>
    <Link {...args} />
  </GlobalThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
