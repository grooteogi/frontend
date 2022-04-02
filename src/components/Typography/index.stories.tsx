import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';
import Typography, { TypoProps } from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ children, ...args }: TypoProps) => (
  <GlobalThemeProvider theme={theme}>
    <div style={{ width: '50%', height: '40%', marginTop: '0.5rem' }}>
      <Typography {...args}>{children}</Typography>
    </div>
  </GlobalThemeProvider>
);

export const Sizes = (args: ComponentStory<typeof Typography>) => {
  const defaultArgs = {
    color: 'black' as const,
    align: 'left' as const,
  };
  return (
    <>
      <Template size="xs" {...defaultArgs} {...args}>
        xs : Noto Sans KR 12px
      </Template>
      <Template size="sm" {...defaultArgs} {...args}>
        sm : Noto Sans KR 14px
      </Template>
      <Template size="md" {...defaultArgs} {...args}>
        md : Noto Sans KR 16px
      </Template>
      <Template size="lg" {...defaultArgs} {...args}>
        lg : Noto Sans KR 24px
      </Template>
    </>
  );
};

export const Custom = (args: ComponentStory<typeof Typography>) => {
  const defaultArgs = {
    color: 'black' as const,
    size: 'sm' as const,
  };
  return (
    <Template {...defaultArgs} {...args}>
      Noto Sans KR
    </Template>
  );
};
