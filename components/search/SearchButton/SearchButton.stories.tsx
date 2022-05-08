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
export const Clicked = (args: ComponentStory<typeof SearchButton>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template
        fetchedTag={{
          id: 0,
          hashtagType: 'PERSONALITY',
          tag: 'sample tag',
          registered: '',
          count: 1,
        }}
        clicked={true}
        onClick={(tagValue: string) => {
          return;
        }}
      />
    </GlobalThemeProvider>
  );
};
export const NotClicked = (args: ComponentStory<typeof SearchButton>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Template
        fetchedTag={{
          id: 0,
          hashtagType: 'PERSONALITY',
          tag: 'sample tag',
          registered: '',
          count: 1,
        }}
        clicked={false}
        onClick={(tagValue: string) => {
          return;
        }}
      />
    </GlobalThemeProvider>
  );
};
