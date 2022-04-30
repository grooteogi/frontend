import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import NormalSignupModal from '../SignUpModal';

export default {
  title: 'Containers/NormalSignupModal',
  component: NormalSignupModal,
} as ComponentMeta<typeof NormalSignupModal>;

const queryClient = new QueryClient();
const Template: ComponentStory<typeof NormalSignupModal> = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalThemeProvider theme={theme}>
      <NormalSignupModal />
    </GlobalThemeProvider>
  </QueryClientProvider>
);

export const DefaultNormalSignup = Template.bind({});
