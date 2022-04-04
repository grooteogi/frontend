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
      <Template content="#기본 대학생활" size="sm" {...args} />
      <Template content="#클릭 대학생활" size="md" clickable={true} {...args} />
      <Template content="#삭제 대학생활" size="lg" removable={true} {...args} />
      {/* <Template content="#삭제 대학생활" size="lg" clickable={true} removable={true} {...args} /> */}
    </GlobalThemeProvider>
  );
};
