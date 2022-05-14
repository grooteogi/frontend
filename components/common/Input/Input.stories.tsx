import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
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

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  value: 'text입니다.',
  placeholder: '값을 입력하세요.',
  type: 'text',
};

export const StyleChangedInput = Template.bind({});
StyleChangedInput.args = {
  value: 'style을 바꾼 text입니다.',
  placeholder: '값을 입력하세요.',
  type: 'text',
  width: '60%',
  height: '40px',
  borderColor: 'red',
  fontColor: 'blue',
};

export const DefaultPassword = Template.bind({});
DefaultPassword.args = {
  value: 'password입니다.',
  placeholder: '비밀번호를 입력하세요',
  type: 'password',
};
