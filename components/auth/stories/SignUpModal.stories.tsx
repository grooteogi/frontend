import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import SignupModal from '../SignUpModal';

export default {
  title: 'Containers/NormalSignupModal',
  component: SignupModal,
} as ComponentMeta<typeof SignupModal>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof SignupModal> = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalThemeProvider theme={theme}>
      <SignupModal />
    </GlobalThemeProvider>
  </QueryClientProvider>
);

export const DefaultNormalSignup = Template.bind({});
