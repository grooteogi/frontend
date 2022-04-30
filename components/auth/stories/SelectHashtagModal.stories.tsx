import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import SelectHashtagModal from '../SelectHashtagModal';

export default {
  title: 'Containers/SelectHashtagModal',
  component: SelectHashtagModal,
} as ComponentMeta<typeof SelectHashtagModal>;

const Template: ComponentStory<typeof SelectHashtagModal> = () => (
  <GlobalThemeProvider theme={theme}>
    <SelectHashtagModal />
  </GlobalThemeProvider>
);

export const DefaultNormalSignup = Template.bind({});
