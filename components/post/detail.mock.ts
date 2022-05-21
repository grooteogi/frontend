import { CreditType, PostEntity } from 'types/entity';

const postInfo: PostEntity = {
  postId: 1,
  title: '포스트의 타이틀은 이렇게 들어오겠죠?',
  content:
    '포스트의 컨텐츠, 그러니까 멘토들이 자신의 약속에 대한 상세설명을 말하고 자신의 생각을 게시하며 미리 공지해야할 내용을 적어두고싶을때 해당 부분에 이렇게 길게 많은 내용을 적을 것 같네요!',
  imageUrl: '/imgs/RotatedImg.png',
  createAt: '2022-04-28 18:32',
  hashtags: [
    { hashtagId: 1, name: '대학생활' },
    { hashtagId: 2, name: '편입' },
  ],
  creditType: CreditType.DIRECT,
  likes: true, // TODO : 논의 필요 ( back: 0, 1 )
  mentor: {
    userId: 100000,
    nickname: '탐이나 냐옹',
    imageUrl: '/imgs/Carousel2.png',
  },
  schedules: [
    {
      scheduleId: 1,
      date: '2022-04-18',
      startTime: '12:00',
      endTime: '14:00',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 2,
      date: '2022-04-19',
      startTime: '12:00',
      endTime: '14:00',
      region: '합정',
      place: '망원동 티라미수',
    },
    {
      scheduleId: 3,
      date: '2022-04-20',
      startTime: '12:00',
      endTime: '14:00',
      region: '이대',
      place: '명지대 나라비',
    },
    {
      scheduleId: 4,
      date: '2022-04-21',
      startTime: '12:00',
      endTime: '14:00',
      region: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      scheduleId: 5,
      date: '2022-04-22',
      startTime: '12:00',
      endTime: '14:00',
      region: '합정',
      place: '망원동 티라미수',
    },
  ],
  reviews: [
    {
      reviewId: 1,
      nickname: '졸리다',
      imageUrl: '/imgs/Carousel1.png',
      createAt: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
      reviewId: 2,
      nickname: '지금은 새벽 3시',
      imageUrl: '/imgs/Carousel2.png',
      createAt: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
      reviewId: 3,
      nickname: '왜 에러떠',
      imageUrl: '/imgs/Carousel3.png',
      createAt: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
  ],
};

export default postInfo;
