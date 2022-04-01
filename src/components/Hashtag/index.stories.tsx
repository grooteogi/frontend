import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Hashtag from './index';

export default {
  title: 'Components/Hashtag',
  component: Hashtag,
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = args => (
  <GlobalThemeProvider theme={theme}>
    <Hashtag {...args} />
  </GlobalThemeProvider>
);

export const NotClicked = Template.bind({});
NotClicked.args = {
  color: 'lightgray',
  borderColor: 'lightgray',
  fontColor: 'black',
  fontSize: 16,
  keyword: '#대학생활',
  isActive: false,
};
export const Clicked = Template.bind({});
Clicked.args = {
  color: 'white',
  borderColor: 'primary',
  fontColor: 'black',
  fontSize: 16,
  keyword: '#대학생활',
  isActive: true,
};
