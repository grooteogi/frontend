import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import NormalSignInModal from './index';

export default {
  title: 'Containers/NormalSigninModal',
  component: NormalSignInModal,
} as ComponentMeta<typeof NormalSignInModal>;

const Template: ComponentStory<typeof NormalSignInModal> = () => (
  <GlobalThemeProvider theme={theme}>
    <NormalSignInModal />
  </GlobalThemeProvider>
);

export const DefaultNormalSignin = Template.bind({});
