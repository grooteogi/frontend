import { ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SortingTab from './index';

export default {
  title: 'Components/SortingTab',
  component: SortingTab,
} as ComponentMeta<typeof SortingTab>;

export const DefaultMeetingPost = () => {
  const itemList = [
    {
      value: '인기순',
    },
    {
      value: '최신순',
    },
    {
      value: '리뷰순',
    },
  ];

  return (
    <GlobalThemeProvider theme={theme}>
      <SortingTab itemList={itemList} />
    </GlobalThemeProvider>
  );
};

export const DefaultMyMeeting = () => {
  const itemList = [
    {
      value: '진행중',
      onclick: () => {
        alert('in progress');
      },
    },
    {
      value: '완료됨',
      onclick: () => {
        alert('completed list');
      },
    },
    {
      value: '찜한 약속',
      onclick: () => {
        alert('wish list');
      },
    },
    {
      value: '전체 목록',
      onclick: () => {
        alert('full list ');
      },
    },
  ];

  return (
    <GlobalThemeProvider theme={theme}>
      <SortingTab itemList={itemList} />
    </GlobalThemeProvider>
  );
};
