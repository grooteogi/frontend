import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Box from './index';

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => (
  <GlobalThemeProvider theme={theme}>
    <Box {...args} />
  </GlobalThemeProvider>
);

export const FixedDimentionBox = Template.bind({});
FixedDimentionBox.args = {
  width: 450,
  height: 500,
};

export const ResponsiveBox = Template.bind({});
ResponsiveBox.args = {};
