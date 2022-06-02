import { ScheduleEntity } from 'types/entity';
import { CreditType } from './enum';

export type UserRegister = {
  type: number;
  id: string;
  password: string;
};

export type AuthSigninRequestDto = {
  email: string;
  password: string;
};

export type PostSearchRequestDto = {
  keyword: string; //default ""
  page: number; //default 1
  sort: string; //enum: LATEST(default), POPULAR, VIEWS
  region: string; //강서구(default), 강남구, 서대문구
};

export type PostCreateRequestDto = {
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[]; // 최대 5개
  creditType: keyof typeof CreditType | string;
  schedules: Omit<ScheduleEntity, 'scheduleId'>[];
};

export type ReservationCreateRequestDto = {
  scheduleId: number;
  phoneNumber?: string;
  message: string;
};

export type ModifyUserProfileRequestDto = {
  nickname: string;
  name: string;
  address: string;
  imageUrl: string;
  phone: string;
};
