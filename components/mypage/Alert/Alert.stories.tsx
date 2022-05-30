import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Alert from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => (
  <GlobalThemeProvider theme={theme}>
    <Alert {...args} />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: '내가 작성한 리뷰',
  content: '내가 썼던 리뷰내용은 이렇게 보여요',
  score: 4,
  onclose: () => {
    console.log('내가 작성한 리뷰');
  },
};
