import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <GlobalThemeProvider theme={theme}>
    <Header {...args} />
  </GlobalThemeProvider>
);

const Common = Template.bind({});
Common.args = {
  navLists: [
    { value: '🌳그루터기', isLogo: true, leftPosition: true },
    { value: '약속 잡기', leftPosition: true },
    { value: '약속 찾기', leftPosition: true },
    { value: '채팅', isAuth: true },
    { value: '내정보', isAuth: true },
    { value: '로그아웃', isAuth: true },
    { value: '로그인', isAuth: false },
    { value: '회원가입', isAuth: false },
  ],
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'test User',
  },
  ...Common.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { ...Common.args };
