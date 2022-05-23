import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SearchPage from '../SearchPage';

export default {
  title: 'Containers/SearchPage',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof SearchPage> = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalThemeProvider theme={theme}>
      <SearchPage />
    </GlobalThemeProvider>
  </QueryClientProvider>
);

export const Default = Template.bind({});
