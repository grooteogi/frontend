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
