import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import PostCard from './index';

export default {
  title: 'Components/PostCard',
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = args => (
  <GlobalThemeProvider theme={theme}>
    <PostCard {...args} />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  width: 235,
  height: 300,
  //image 235, 200
};
