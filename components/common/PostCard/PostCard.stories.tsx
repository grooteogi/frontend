import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import PostCard from './index';

export default {
  title: 'Components/PostCard',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = args => (
  <GlobalThemeProvider theme={theme}>
    <PostCard
      fetchedData={{
        id: 1,
        title: '포스트카드 타이틀',
        content: '아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말',
        imageUrl: '/logos/dev_sample.jpg',
        views: 0,
        createDate: '',
        modifiedDate: '',
        postHashtags: [
          { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
          { id: 2, hashtagType: 'CONCERN', tag: '대외활동', registered: '' },
          { id: 3, hashtagType: 'CONCERN', tag: '포트폴리오', registered: '' },
        ],
      }}
      setClickedPostId={function (id: number): void {
        return;
      }}
    />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
