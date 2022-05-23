import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignInModal from '../SignInModal';

export default {
  title: 'Containers/NormalSignInModal',
  component: SignInModal,
} as ComponentMeta<typeof SignInModal>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof SignInModal> = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalThemeProvider theme={theme}>
      <SignInModal />
    </GlobalThemeProvider>
  </QueryClientProvider>
);

export const DefaultNormalSignin = Template.bind({});
