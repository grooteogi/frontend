import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SearchBar from './index';
import { Hashtag } from './index';

const sampleHashtags: Hashtag[] = [
  { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
  { id: 2, hashtagType: 'CONCERN', tag: '포트폴리오', registered: '' },
];

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = args => (
  <GlobalThemeProvider theme={theme}>
    <SearchBar {...args} />
  </GlobalThemeProvider>
);

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  value: '',
  placeholder: '관심사를 검색해보세요~',
  hashtags: sampleHashtags,
};
