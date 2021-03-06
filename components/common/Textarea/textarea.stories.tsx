import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Textarea from './index';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = ({ ...args }) => (
  <GlobalThemeProvider theme={theme}>
    <Textarea {...args} />
  </GlobalThemeProvider>
);

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = {
  value: 'textarea입니다.',
  placeholder: '값을 입력하세요.',
  rows: 10,
};

export const StyleChangedTextarea = Template.bind({});
StyleChangedTextarea.args = {
  value: 'style을 바꾼 textarea입니다.',
  placeholder: '값을 입력하세요.',
  rows: 10,
  width: '60%',
  height: '300px',
  borderColor: 'red',
  fontColor: 'blue',
};
