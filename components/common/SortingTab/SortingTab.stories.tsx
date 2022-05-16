import { ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { useState } from 'react';
import SortingTab from './index';

export default {
  title: 'Components/SortingTab',
  component: SortingTab,
} as ComponentMeta<typeof SortingTab>;

export const DefaultMeetingPost = () => {
  const itemList = ['인기순', '최신순', '리뷰순'];
  const [sortingValue, setSortingValue] = useState<string>('인기순');
  return (
    <GlobalThemeProvider theme={theme}>
      <SortingTab itemList={itemList} onClick={setSortingValue} state={sortingValue} />
    </GlobalThemeProvider>
  );
};

export const DefaultMyMeeting = () => {
  const itemList = ['진행중', '완료됨', '찜한 약속', '전체 목록'];
  const [sortingValue, setSortingValue] = useState<string>('진행중');

  return (
    <GlobalThemeProvider theme={theme}>
      <SortingTab itemList={itemList} onClick={setSortingValue} state={sortingValue} />
    </GlobalThemeProvider>
  );
};
