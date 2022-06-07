import { PostEntity, ReviewEntity } from './entity';

export type PostSearchResponseDto = {
  posts: Pick<PostEntity, 'postId' | 'title' | 'content' | 'imageUrl' | 'hashtags'>[];
  pageCount: number;
};

export type ReservationCreateResponseDto = {
  reservationId: number;
};

export type HashtagResponseDto = {
  name: string;
};

export type AuthSigninResponseDto = {
  nickname: string;
  imageUrl: string;
};
export type ReviewsResponseDto = {
  reviews: ReviewEntity[];
};

export type ReservationListResponseDto = {
  postId: number | string;
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
  content?: string;
};

export type PostDetailResponseDto = PostEntity & { isAuthor: boolean };

export type UserProfileResponseDto = {
  nickname: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  imageUrl: string;
};
