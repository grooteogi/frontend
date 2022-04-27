import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import NormalSignInModal from './index';

export default {
  title: 'Containers/NormalSignInModal',
  component: NormalSignInModal,
} as ComponentMeta<typeof NormalSignInModal>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof NormalSignInModal> = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalThemeProvider theme={theme}>
      <NormalSignInModal />
    </GlobalThemeProvider>
  </QueryClientProvider>
);

export const DefaultNormalSignin = Template.bind({});
