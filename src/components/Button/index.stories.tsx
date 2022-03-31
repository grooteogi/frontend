import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <GlobalThemeProvider theme={theme}>
    <div style={{ width: '50%', height: '40%', marginTop: '0.5rem' }}>
      <Button {...args} />
    </div>
  </GlobalThemeProvider>
);

export const Sizes = (args: ComponentStory<typeof Button>) => {
  const defaultArgs = {
    color: 'primary' as const,
    fontColor: 'black' as const,
    name: 'Button',
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <Template size={'lg'} {...defaultArgs} {...args} />
      <Template size={'md'} {...defaultArgs} {...args} />
      <Template size={'sm'} {...defaultArgs} {...args} />
    </GlobalThemeProvider>
  );
};

export const Colors = (args: ComponentStory<typeof Button>) => {
  const defaultArgs = {
    name: 'Button',
    size: 'md' as const,
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <Template color="primary" fontColor="black" {...defaultArgs} {...args} />
      <Template color="black" fontColor="white" {...defaultArgs} {...args} />
      <Template color="lightgray" fontColor="black" {...defaultArgs} {...args} />
      <Template color="white" fontColor="black" {...defaultArgs} {...args} />
    </GlobalThemeProvider>
  );
};

export const Icons = (args: ComponentStory<typeof Button>) => {
  const kakaoArgs = {
    color: 'kakao' as const,
    fontColor: 'black' as const,
    name: '카카오로 1초만에 시작하기',
    size: 'lg' as const,
  };
  const googleArgs = {
    color: 'white' as const,
    fontColor: 'black' as const,
    name: '구글계정으로 시작하기',
    size: 'lg' as const,
    borderColor: 'lightgray' as const,
  };
  const emailArgs = {
    color: 'lightgray' as const,
    fontColor: 'darkgray' as const,
    name: '이메일로 시작하기',
    size: 'lg' as const,
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <Template icon={'/logos/kakao_logo.png'} {...kakaoArgs} {...args} />
      <Template icon={'/logos/google_logo.png'} {...googleArgs} {...args} />
      <Template {...emailArgs} {...args} />
    </GlobalThemeProvider>
  );
};
