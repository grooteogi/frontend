import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Box from '../../components/Box';
import SearchMenu from './index';

export default {
  title: 'Containers/SearchMenu',
  component: SearchMenu,
} as ComponentMeta<typeof SearchMenu>;

const Template: ComponentStory<typeof SearchMenu> = args => (
  <GlobalThemeProvider theme={theme}>
    <Box width={1200} height={500}>
      <SearchMenu {...args} />
    </Box>
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
