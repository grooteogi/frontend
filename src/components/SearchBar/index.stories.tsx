import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SearchBar from './index';

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
  placeholder: '관심사를 검색해보세요~',
  hashtags: [],
};

export const HashInput = Template.bind({});
HashInput.args = {
  placeholder: '관심사를 검색해보세요~',
  hashtags: [
    { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
    { id: 2, hashtagType: 'CONCERN', tag: '대외활동', registered: '' },
  ],
};
