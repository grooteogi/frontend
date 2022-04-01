import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import HeaderNavElement from './index';

export default {
  title: 'Components/HeaderNavElement',
  component: HeaderNavElement,
} as ComponentMeta<typeof HeaderNavElement>;

const Template: ComponentStory<typeof HeaderNavElement> = args => (
  <GlobalThemeProvider theme={theme}>
    <HeaderNavElement {...args} />
  </GlobalThemeProvider>
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  name: 'navValue',
};
