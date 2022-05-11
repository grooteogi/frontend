export type UserEntity = {
  id: number;
  nickname: string;
  imageUrl: string;
};

export type ProfileEntity = UserEntity & {
  email: string;
};

export type ScheduleEntity = {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  region: string;
  place: string;
};

export type ReservationEntity = ScheduleEntity & {
  id: number;
  comment: string;
  mentor: UserEntity;
  menti: UserEntity;
};

export type ReviewEntity = {
  id: number;
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

enum CreditType {
  DIRECT, //만나서 결제
  DUTCHPAY, //더치페이
  YOURPAY, //사주세요
  MYPAY, //사줄게요
}

export type PostEntity = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createAt: string;
  hashtags: HashtagEntity[];
  creditType: CreditType;
  likes: boolean; // TODO : 논의 필요
  mentor: {
    id: number;
    nickname: string;
    imageUrl: string;
  };
  schedules: ScheduleEntity[];
};
