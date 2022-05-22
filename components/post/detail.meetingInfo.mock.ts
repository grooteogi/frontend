import { PostEntity } from 'types/entity';
import { CreditType } from 'types/enum';

const postInfo: Omit<PostEntity, 'hashtags'> & { hashtags: string[] } = {
  postId: 1,
  title: '포스트의 타이틀은 이렇게 들어오겠죠?',
  content:
    '다수의 공모전 어쩌고 저쩌고 기술로 배움을 연결하고 가속화’하는 클래스팅은 클래스관리 분야 선두 주자 ‘클래스’ 서비스와 인공지능과 게이미피케이션 요소를 기반해 학습자의 자발적 학습을 유도하는 "클래스팅 AI" 서비스를 제공하는 에듀테크 기업입니다. 클래스팅은 현재 전국 750만 명 이상의 회원을 보유하고 있으며, 원하는 클래스를 쉽게 찾는 클래스 플랫폼, 학생 지도를 쉽게 돕는 인사이트 서비스 등 프로덕트 다각화를 통해 초중고를 넘어 대학, 직업, 평생 교육까지 누구나 교육을 원할 때 먼저 클래스팅을 떠올릴 수 있도록 하고자 합니다.',
  imageUrl: '/imgs/RotatedImg.png',
  createAt: '2022-04-28 18:32',
  hashtags: ['대학생활', '편입', '종강', '졸업'],
  creditType: CreditType.DIRECT,
  likes: {
    count: 17,
    liked: true,
  },
  mentor: {
    userId: 100000,
    nickname: '탐이나 냐옹',
    imageUrl: '/imgs/Carousel2.png',
  },
};

export default postInfo;
