import { CreditType } from './enum';

export type AuthEntity = {
  email: string;
  password: string;
};

export type UserEntity = {
  userId: number;
  nickname: string;
  imageUrl: string;
};

export type ProfileEntity = UserEntity & {
  email: string;
};

export type ScheduleEntity = {
  scheduleId: number | string;
  date: string;
  startTime: string;
  endTime: string;
  region: string;
  place: string;
};

export type ReservationEntity = ScheduleEntity & {
  scheduleId: number;
  message: string;
  mentor: UserEntity;
  menti: UserEntity;
};

export type ReviewEntity = {
  reviewId: number;
  nickname: string;
  score: number;
  imageUrl: string;
  createAt: string;
  text: string;
};

export type PostEntity = {
  postId: string;
  title: string;
  content: string;
  imageUrl: string;
  createAt: string;
  hashtags: string[];
  creditType: keyof typeof CreditType | string;
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
