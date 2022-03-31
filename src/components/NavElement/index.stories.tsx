import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import NavElement from './index';

export default {
  title: 'Components/NavElement',
  component: NavElement,
} as ComponentMeta<typeof NavElement>;

const Template: ComponentStory<typeof NavElement> = args => (
  <GlobalThemeProvider theme={theme}>
    <NavElement {...args} />
  </GlobalThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'navValue',
};
