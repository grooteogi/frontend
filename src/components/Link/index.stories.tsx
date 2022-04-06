import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Link from './index';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <GlobalThemeProvider theme={theme}>
    <Link {...args} />
  </GlobalThemeProvider>
);

export const Colors = (args: ComponentStory<typeof Link>) => {
  const defaultArgs = {
    children: '회원가입하러가기',
    size: 'lg' as const,
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <Template href={''} color={'primary'} {...defaultArgs} {...args} />
      <Template href={''} color={'primary'} {...defaultArgs} {...args} />
    </GlobalThemeProvider>
  );
};

export const Sizes = (args: ComponentStory<typeof Link>) => {
  const defaultArgs = {
    children: '로그인하러가기',
    color: 'primary' as const,
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <Template href={''} size={'lg'} {...defaultArgs} {...args} />
      <Template href={''} size={'md'} {...defaultArgs} {...args} />
      <Template href={''} size={'sm'} {...defaultArgs} {...args} />
      <Template href={''} size={'xs'} {...defaultArgs} {...args} />
    </GlobalThemeProvider>
  );
};
