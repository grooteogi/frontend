import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import AgreeCheckboxText from './index';

export default {
  title: 'Components/AgreeCheckboxText',
  component: AgreeCheckboxText,
} as ComponentMeta<typeof AgreeCheckboxText>;

const Template: ComponentStory<typeof AgreeCheckboxText> = args => (
  <GlobalThemeProvider theme={theme}>
    <AgreeCheckboxText {...args} />
  </GlobalThemeProvider>
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  value: '약관동의문구(필수)',
  fontColor: '#4e4e4e',
  fontSize: 12,
};
export const DefaultShowBiew = Template.bind({});
DefaultShowBiew.args = {
  value: '보기',
  fontColor: '#4e4e4e',
  fontSize: 12,
  hidden: true,
};
