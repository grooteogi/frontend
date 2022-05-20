import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import StickyBar from './index';

export default {
  title: 'Components/StickyBar',
  component: StickyBar,
} as ComponentMeta<typeof StickyBar>;

export const DetailPage = (args: ComponentStory<typeof StickyBar>) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <StickyBar buttonName={'약속 신청하기'} {...args} />
    </GlobalThemeProvider>
  );
};
