import { PostEntity, ReviewEntity } from './entity';
export type PostSearchResponseDto = {
  posts: [
    {
      postId: number;
      title: string;
      content: string;
      imageUrl: string;
      hashtags: string[]; // 최대 5개
    },
  ];
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
