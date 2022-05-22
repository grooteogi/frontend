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
    <PostCard {...args} />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  imageSrc: '/logos/dev_sample.jpg',
  hashtags: [
    { hashtagId: 1, name: '대학생활' },
    { hashtagId: 2, name: '대외활동' },
    { hashtagId: 3, name: '유학' },
  ],
  title: '밥 먹으면서 진로 이야기 해요~ 이후 텍스트 보이지 않음.',
  content:
    '대외활동 다수 경험, 공모전 수상 팁들 알려드릴 수 있어요, 앞으로 진로계획들 들어보고싶어요! 이후 텍스트 보이지 않음.',
};
