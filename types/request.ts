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

// params
export type PostSearchRequestDto = {
  keyword: string; //빈칸이어도 됨 전체
  page: number; //페이지 번호, default 1
  sort: string; //sorting; 최신순(default), 인기순, 조회순 //enum: LATEST(default), POPULAR, VIEWS
  region: string; //강서구(default), 강남구, 서대문구
};

export type PostCreateRequestDto = {
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[]; // 최대 5개
  creditType: CreditType;
  schedules: {
    date: string;
    startTime: string;
    endTime: string;
    region: string;
    place: string;
  }[];
};

export type ReservationCreateRequestDto = {
  scheduleId: number;
  phoneNumber?: string;
  message: string;
};
