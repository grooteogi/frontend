import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import SignInModal from './index';

export default {
  title: 'Containers/SignInModal',
  component: SignInModal,
} as ComponentMeta<typeof SignInModal>;

const Template: ComponentStory<typeof SignInModal> = () => (
  <GlobalThemeProvider theme={theme}>
    <SignInModal />
  </GlobalThemeProvider>
);

export const DefaultNormalSignup = Template.bind({});
