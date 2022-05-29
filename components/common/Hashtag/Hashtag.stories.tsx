import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Hashtag from './index';

const sampleHashtags: string[] = ['대학생활', '편입'];

export default {
  title: 'Components/Hashtag',
  component: Hashtag,
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = args => (
  <GlobalThemeProvider theme={theme}>
    <Hashtag {...args} />
  </GlobalThemeProvider>
);

const temporaryClickHandler = () => undefined;

export const Types = (args: ComponentStory<typeof Hashtag>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template hashtag={sampleHashtags[0]} clickable={true} {...args} onClick={temporaryClickHandler} />
      <Template hashtag={sampleHashtags[0]} removable={true} {...args} onRemove={temporaryClickHandler} />
      <Template hashtag={sampleHashtags[1]} clickable={true} {...args} onClick={temporaryClickHandler} />
      <Template hashtag={sampleHashtags[1]} removable={true} {...args} onRemove={temporaryClickHandler} />
    </GlobalThemeProvider>
  );
};
