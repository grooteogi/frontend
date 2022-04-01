import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import AgreeCheckboxRect from './index';

export default {
  title: 'Components/AgreeCheckboxRect',
  component: AgreeCheckboxRect,
} as ComponentMeta<typeof AgreeCheckboxRect>;

const Template: ComponentStory<typeof AgreeCheckboxRect> = args => (
  <GlobalThemeProvider theme={theme}>
    <AgreeCheckboxRect {...args} />
  </GlobalThemeProvider>
);

export const DefaultView = Template.bind({});
DefaultView.args = {
  backgroundColor: '#ffffff',
  borderColor: '#b7b7b7',
};
