import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SortingTab from './index';

export default {
  title: 'Components/SortingTab',
  component: SortingTab,
} as ComponentMeta<typeof SortingTab>;

const Template: ComponentStory<typeof SortingTab> = args => (
  <GlobalThemeProvider theme={theme}>
    <SortingTab {...args}></SortingTab>
  </GlobalThemeProvider>
);

export const DefaultMeetingPost = Template.bind({});
DefaultMeetingPost.args = {
  tabList: [{ name: '인기순', selected: true }, { name: '최신순' }, { name: '리뷰순' }],
};

export const DefaultMyMeeting = Template.bind({});
DefaultMyMeeting.args = {
  tabList: [{ name: '진행중', selected: true }, { name: '완료됨' }, { name: '찜한 약속' }, { name: '전체 목록' }],
};
