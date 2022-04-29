import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Wrapper from './index';

export default {
  title: 'Components/Wrapper',
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = args => (
  <GlobalThemeProvider theme={theme}>
    <Wrapper {...args} />
  </GlobalThemeProvider>
);

export const BoxWrapper = Template.bind({});
BoxWrapper.args = {
  semantic: 'article',
  flexDirection: 'row',
};
