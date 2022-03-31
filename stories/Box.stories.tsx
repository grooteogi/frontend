import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Example/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => <Box {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  width: 450,
  height: 500,
};
