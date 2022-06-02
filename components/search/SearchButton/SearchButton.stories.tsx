import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import SearchButton from './index';

export default {
  title: 'Components/SearchButton',
  component: SearchButton,
} as ComponentMeta<typeof SearchButton>;

const Template: ComponentStory<typeof SearchButton> = args => (
  <GlobalThemeProvider theme={theme}>
    <SearchButton {...args} />
  </GlobalThemeProvider>
);
export const Clicked = () => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template hashtag={'sample tag'} clicked={true} onClick={() => undefined} />
    </GlobalThemeProvider>
  );
};
export const NotClicked = () => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template hashtag={'sample tag'} clicked={false} onClick={() => undefined} />
    </GlobalThemeProvider>
  );
};
