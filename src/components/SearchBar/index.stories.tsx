import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Box from '../Box';
import SearchBar from './index';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = args => (
  <GlobalThemeProvider theme={theme}>
    <Box width={1060} height={500}>
      <SearchBar {...args} />
    </Box>
  </GlobalThemeProvider>
);

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: '관심사를 검색해보세요~',
  hashtags: [],
};
