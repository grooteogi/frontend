import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import PostCard from './index';

export default {
  title: 'Components/PostCard',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = () => (
  <GlobalThemeProvider theme={theme}>
    <PostCard
      post={{
        postId: '1',
        title: '샘플 포스트 제목 생략생략생략생략생략생략',
        content:
          '샘플 포스트 제목 아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말',
        imageUrl: '/imgs/SamplePost.jpeg',
        hashtags: ['스토리북세', '팅하기귀찮', '여긴네글'],
      }}
      onClick={() => undefined}
    />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
