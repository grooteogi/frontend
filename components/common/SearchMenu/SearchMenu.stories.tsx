import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Box from '@components/common/Box';
import SearchMenu from './SearchMenu';
import sampleData from './data.json';
import { fetchedHashtag } from 'types/fetchedHashtag';

export default {
  title: 'Containers/SearchMenu',
  component: SearchMenu,
} as ComponentMeta<typeof SearchMenu>;

const Template: ComponentStory<typeof SearchMenu> = args => (
  <GlobalThemeProvider theme={theme}>
    <Box>
      <SearchMenu {...args} />
    </Box>
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  data: sampleData as fetchedHashtag[],
};
