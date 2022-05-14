import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import Image from './index';

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = ({ ...args }) => (
  <GlobalThemeProvider theme={theme}>
    <div style={{ width: '500px', height: '500px', backgroundColor: '#eeeeee' }}>
      <Image {...args} />
    </div>
  </GlobalThemeProvider>
);

export const LargeWidthImage = Template.bind({});
LargeWidthImage.args = {
  src: '/imgs/Carousel2.png',
  alt: 'not found',
  size: 'lg',
};
export const MediumHeightImage = Template.bind({});
MediumHeightImage.args = {
  src: '/imgs/Carousel2.png',
  alt: 'not found',
  size: 'md',
};

export const SmallHeightImage = Template.bind({});
SmallHeightImage.args = {
  src: '/imgs/Carousel2.png',
  alt: 'not found',
  size: 'sm',
};
