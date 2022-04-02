import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Hashtag from './index';

export default {
  title: 'Components/Hashtag',
  component: Hashtag,
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = args => (
  <GlobalThemeProvider theme={theme}>
    <Hashtag {...args} />
  </GlobalThemeProvider>
);

export const Types = (args: ComponentStory<typeof Hashtag>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template content="#기본 대학생활" {...args} />
      <Template content="#클릭 대학생활" clickable {...args} />
      <Template content="#삭제 대학생활" removable {...args} />
      {/* <Template content="#삭제 대학생활" clickable removable {...args} /> */}
      {/* cannot clickable and removable at the same time. */}
    </GlobalThemeProvider>
  );
};
