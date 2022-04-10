import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Dropdown from './index';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
  <GlobalThemeProvider theme={theme}>
    <Dropdown {...args} />
  </GlobalThemeProvider>
);

export const DefaultLocale = (args: ComponentStory<typeof Dropdown>) => {
  const defaultArgs = {
    name: 'locale',
    list: ['강서구', '구로구', '금천구', '관악구', '동작구', '영등포구', '양천구', ' 마포구', '서대문구'],
  };
  return <Template {...defaultArgs} {...args}></Template>;
};
