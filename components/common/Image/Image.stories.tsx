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
    <div style={{ backgroundColor: '#eeeeee' }}>
      <Image {...args} />
    </div>
  </GlobalThemeProvider>
);

export const ContainWidthImage = Template.bind({});
ContainWidthImage.args = {
  width: '500px',
  height: '500px',
  objectFit: 'contain',
  src: '/imgs/CarouselBasic.png',
  alt: 'not found',
};
export const ContainHeightImage = Template.bind({});
ContainHeightImage.args = {
  width: '500px',
  height: '500px',
  objectFit: 'contain',
  src: '/imgs/RotatedImg.png',
  alt: 'not found',
};

export const CoverImage = Template.bind({});
CoverImage.args = {
  width: '500px',
  height: '500px',
  objectFit: 'cover',
  src: '/imgs/RotatedImg.png',
  alt: 'not found',
};
export const FillImage = Template.bind({});
FillImage.args = {
  objectFit: 'fill',
  src: '/imgs/RotatedImg.png',
  alt: 'not found',
};
