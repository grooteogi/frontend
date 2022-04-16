import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import NormalSignupModal from './index';

export default {
  title: 'Containers/NormalSignupModal',
  component: NormalSignupModal,
} as ComponentMeta<typeof NormalSignupModal>;

const Template: ComponentStory<typeof NormalSignupModal> = () => (
  <GlobalThemeProvider theme={theme}>
    <NormalSignupModal />
  </GlobalThemeProvider>
);

export const DefaultNormalSignup = Template.bind({});
