import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import AddHashtagBar from './AddHashtagBar';

export default {
  title: 'Components/AddHashtagBar',
  component: AddHashtagBar,
} as ComponentMeta<typeof AddHashtagBar>;

const Template: ComponentStory<typeof AddHashtagBar> = args => (
  <GlobalThemeProvider theme={theme}>
    <AddHashtagBar {...args} />
  </GlobalThemeProvider>
);

export const DefaultInput = Template.bind({});
