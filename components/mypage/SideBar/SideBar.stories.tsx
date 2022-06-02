import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import SideBar from './SideBar';

export default {
  title: 'Components/MypageSideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = () => (
  <GlobalThemeProvider theme={theme}>
    <SideBar />
  </GlobalThemeProvider>
);

export const Default = () => {
  return <Template></Template>;
};
