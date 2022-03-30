import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
  <GlobalThemeProvider theme={theme}>
    <Input {...args} />
  </GlobalThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'white',
  fontColor: 'gray',
  borderColor: 'gray',
  borderRadius: 8,
  fontSize: 16,
  width: 375,
  height: 40,
  value: 'input Value',
};
