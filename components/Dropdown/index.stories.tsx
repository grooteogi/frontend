import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
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
    list: [
      '강서구',
      '구로구',
      '금천구',
      '관악구',
      '동작구',
      '영등포구',
      '양천구',
      ' 마포구',
      '서대문구',
      '서초구',
      '강남구',
      '송파구',
      '강동구',
      '은평구',
      '종로구',
      '중구',
      '용산구',
      '성동구',
      '동대문구',
      '중랑구',
      '광진구',
      '노원구',
      '성북구',
      '강북구',
      '도봉구',
    ],
  };
  return <Template {...defaultArgs} {...args}></Template>;
};
export const NoLocale = (args: ComponentStory<typeof Dropdown>) => {
  const defaultArgs = {
    list: [],
  };
  return <Template {...defaultArgs} {...args}></Template>;
};
