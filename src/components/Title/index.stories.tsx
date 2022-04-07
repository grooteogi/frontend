import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from '.';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import theme from '../../../styles/theme';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = ({ children, ...args }) => {
  return (
    <GlobalThemeProvider theme={theme}>
      <Title {...args}>{children}</Title>
    </GlobalThemeProvider>
  );
};

export const Sizes = (args: ComponentStory<typeof Title>) => {
  const defaultArgs = {
    color: 'black' as const,
    align: 'left' as const,
  };
  return (
    <>
      <Template size="h1" {...defaultArgs} {...args}>
        Header h1
      </Template>
      <Template size="h2" {...defaultArgs} {...args}>
        Header h2
      </Template>
      <Template size="h3" {...defaultArgs} {...args}>
        Header h3
      </Template>
      <Template size="h4" {...defaultArgs} {...args}>
        Header h4
      </Template>
    </>
  );
};

export const Icons = (args: ComponentStory<typeof Title>) => {
  const logoArgs = {
    color: 'black' as const,
    align: 'left' as const,
    icon: '/logos/grooteogi_logo.png',
  };
  return (
    <GlobalThemeProvider theme={theme}>
      <Template size="h1" {...logoArgs} {...args}>
        Header with Icon
      </Template>
    </GlobalThemeProvider>
  );
};
