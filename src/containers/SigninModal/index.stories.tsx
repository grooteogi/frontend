import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignInModal from './index';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';

export default {
  title: 'Containers/SiginModal',
  component: SignInModal,
} as ComponentMeta<typeof SignInModal>;

const Template: ComponentStory<typeof SignInModal> = () => {
  return (
    <GlobalThemeProvider theme={theme}>
      <SignInModal />
    </GlobalThemeProvider>
  );
};

export const View = (args: ComponentStory<typeof SignInModal>) => <Template />;
