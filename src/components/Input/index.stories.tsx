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
  type: 'textarea',
  value: 'textarea입니다.',
  placeholder: '값을 입력하세요.',
  rows: 10,
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: 'text',
  value: 'text입니다.',
  placeholder: '값을 입력하세요.',
};

export const DefaultPassword = Template.bind({});
DefaultPassword.args = {
  type: 'password',
  value: 'password입니다.',
  placeholder: '비밀번호를 입력하세요',
};
