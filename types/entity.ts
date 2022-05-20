export type UserEntity = {
  id: number;
  nickname: string;
  imageUrl: string;
};

export type ProfileEntity = UserEntity & {
  email: string;
};

export type ScheduleEntity = {
  scheduleId: number;
  date: string;
  startTime: string;
  endTime: string;
  region: string;
  place: string;
};

export type ReservationEntity = ScheduleEntity & {
  id: number;
  message: string;
  mentor: UserEntity;
  menti: UserEntity;
};

export type ReviewEntity = {
  reviewId: number;
  nickname: string;
  imageUrl: string;
  createAt: string;
  text: string;
};

export type HashtagEntity = {
  id: number;
  hashtagType: 'PERSONALITY' | 'CONCERN';
  tag: string;
  registered: string;
  count?: number;
};

export enum CreditType {
  DIRECT, //만나서 결제
  DUTCHPAY, //더치페이
  YOURPAY, //사주세요
  MYPAY, //사줄게요
}

export enum CreditTypeKR {
  '만나서 결제',
  '더치페이',
  '사주세요',
  '사줄게요',
}

export type PostEntity = {
  postId: number;
  title: string;
  content: string;
  imageUrl: string;
  createAt: string;
  hashtags: string[];
  creditType: CreditType;
  likes: {
    count: number;
    liked: boolean;
  };
  mentor: {
    userId: number;
    nickname: string;
    imageUrl: string;
  };
};
