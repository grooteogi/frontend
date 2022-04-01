import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import AgreeCheckbox from './index';

export default {
  title: 'Components/AgreeCheckbox',
  component: AgreeCheckbox,
} as ComponentMeta<typeof AgreeCheckbox>;

const Template: ComponentStory<typeof AgreeCheckbox> = args => (
  <GlobalThemeProvider theme={theme}>
    <AgreeCheckbox {...args} />
  </GlobalThemeProvider>
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  width: 150,
  padding: '0.2rem 0.2rem 0.2rem 1rem',
};
