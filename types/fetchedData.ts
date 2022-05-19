export type TagMenuEntity = {
  hashtagId: number;
  name: string;
};

export type PostEntity = {
  postId: number;
  title: string;
  content: string;
  imageUrl: string;
  hashtags: string[]; // 최대 5개
};
