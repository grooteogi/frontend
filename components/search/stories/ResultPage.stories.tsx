import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import ResultPage from '../ResultPage';

export default {
  title: 'Containers/ResultPage',
  component: ResultPage,
} as ComponentMeta<typeof ResultPage>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof ResultPage> = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalThemeProvider theme={theme}>
      <ResultPage />
    </GlobalThemeProvider>
  </QueryClientProvider>
);

export const Default = Template.bind({});
