import { ComponentStory, ComponentMeta } from '@storybook/react';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import theme from '@styles/theme';
import MyPageCard from './MyPageCard';

export default {
  title: 'Components/MyPageCard',
  component: MyPageCard,
} as ComponentMeta<typeof MyPageCard>;

const Template: ComponentStory<typeof MyPageCard> = args => (
  <GlobalThemeProvider theme={theme}>
    <MyPageCard {...args} />
  </GlobalThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  reservationEntity: {
    scheduleId: 1,
    date: '4월 3일',
    startTime: '6:00PM',
    endTime: '8:00PM',
    region: '마포구',
    place: '신촌역 4번 출구',
    message: '나 좀 살려주세요',
    mentor: { userId: 10, nickname: '토 닉넴', imageUrl: '' },
    menti: { userId: 11, nickname: '티 닉넴', imageUrl: '' },
  },
};
