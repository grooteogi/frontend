import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { CreditType } from 'types/enum';
import PostCard from './index';

export default {
  title: 'Components/PostCard',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = () => (
  <GlobalThemeProvider theme={theme}>
    <PostCard
      postEntity={{
        postId: 1,
        title: '샘플 포스트 제목, mentor imageUrl 바꿔야함',
        content:
          '샘플 포스트 제목 아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말',
        imageUrl: '',
        createAt: '',
        hashtags: ['스토리북', '세팅하기', '귀찮아라'],
        creditType: CreditType.DIRECT,
        likes: {
          liked: true,
          count: 10,
        },
        mentor: {
          userId: 1,
          nickname: 'mentor nickname',
          imageUrl: 'mentor imageUrl',
        },
      }}
      setClickedPostId={() => undefined}
    />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
