import { PostCardEntity, PostEntity, ReviewEntity } from './entity';

export type PostSearchResponseDto = {
  posts: PostCardEntity[];
  pageCount: number;
};

export type ReservationCreateResponseDto = {
  reservationId: number;
};
export type PostDetailResponseDto = {
  post: PostEntity[];
};
export type AuthSigninResponseDto = {
  nickname: string;
  imageUrl: string;
};
export type ReviewsResponseDto = {
  reviews: ReviewEntity[];
};

export type ReservationListResponseDto = {
  postId: number;
  imageUrl: string;
  title: string;
  hashtags: string[];
  reservationId: number;
  date: string;
  startTime: string;
  endTime: string;
  region: string;
  place: string;
  applyNickname: string;
  text: string;
  score: number;
  review: string;
  hostPhone: string;
  applyPhone: string;
};

export type PostListResponseDto = {
  postId: number;
  imageUrl: string;
  title: string;
  hashtags: string[];
};

export type UserProfileResponseDto = {
  nickname: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  imageUrl: string;
};
