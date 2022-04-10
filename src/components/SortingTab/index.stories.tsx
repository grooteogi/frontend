import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SortingTab, { SortingTabItem } from './index';

export default {
  title: 'Components/SortingTab',
  component: SortingTab,
} as ComponentMeta<typeof SortingTab>;

export const DefaultMeetingPost = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const changeState = (selectedIdx: number) => {
    setSelectedIdx(selectedIdx);
  };

  return (
    <GlobalThemeProvider theme={theme}>
      <SortingTab>
        <SortingTabItem active={selectedIdx === 0 ? true : false} onTabClick={() => changeState(0)}>
          인기순
        </SortingTabItem>
        <SortingTabItem active={selectedIdx === 1 ? true : false} onTabClick={() => changeState(1)}>
          최신순
        </SortingTabItem>
        <SortingTabItem active={selectedIdx === 2 ? true : false} onTabClick={() => changeState(2)}>
          리뷰순
        </SortingTabItem>
      </SortingTab>
    </GlobalThemeProvider>
  );
};

export const DefaultMyMeeting = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const changeState = (selectedIdx: number) => {
    setSelectedIdx(selectedIdx);
  };

  return (
    <GlobalThemeProvider theme={theme}>
      <SortingTab>
        <SortingTabItem active={selectedIdx === 0 ? true : false} onTabClick={() => changeState(0)}>
          진행중
        </SortingTabItem>
        <SortingTabItem active={selectedIdx === 1 ? true : false} onTabClick={() => changeState(1)}>
          완료됨
        </SortingTabItem>
        <SortingTabItem active={selectedIdx === 2 ? true : false} onTabClick={() => changeState(2)}>
          찜한 약속
        </SortingTabItem>
        <SortingTabItem active={selectedIdx === 3 ? true : false} onTabClick={() => changeState(3)}>
          전체 목록
        </SortingTabItem>
      </SortingTab>
    </GlobalThemeProvider>
  );
};
