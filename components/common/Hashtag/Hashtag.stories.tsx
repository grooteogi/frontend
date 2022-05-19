import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import { TagMenuEntity } from 'types/fetchedData';
import Hashtag from './index';

const sampleHashtags: TagMenuEntity[] = [
  { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
  { id: 2, hashtagType: 'CONCERN', tag: '편입', registered: '' },
];

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
      <Template fetchedTag={sampleHashtags[0]} clickable={true} {...args} onClick={temporaryClickHandler} />
      <Template fetchedTag={sampleHashtags[0]} removable={true} {...args} onRemove={temporaryClickHandler} />
      <Template fetchedTag={sampleHashtags[1]} clickable={true} {...args} onClick={temporaryClickHandler} />
      <Template fetchedTag={sampleHashtags[1]} removable={true} {...args} onRemove={temporaryClickHandler} />
    </GlobalThemeProvider>
  );
};
