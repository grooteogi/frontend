import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...args }) => (
  <GlobalThemeProvider theme={theme}>
    <Input {...args} />
  </GlobalThemeProvider>
);

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = {
  type: 'long',
  value: 'input value',
  placeholder: 'placeholder',
  rows: 10,
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: 'short',
  value: 'input value',
  placeholder: 'placeholder',
};
