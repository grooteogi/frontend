import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SearchPage from '../SearchPage';

export default {
  title: 'Containers/SearchPage',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = () => (
  <GlobalThemeProvider theme={theme}>
    <SearchPage />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
