import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Footer from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => (
  <GlobalThemeProvider theme={theme}>
    <Footer {...args} />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
