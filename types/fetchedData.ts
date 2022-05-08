export type fetchedHashtag = {
  id: number;
  hashtagType: 'PERSONALITY' | 'CONCERN';
  tag: string;
  registered: string;
  count?: number;
};

export type fetchedPostCard = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  views: number;
  createDate: string;
  modifiedDate: string;
  postHashtags: fetchedHashtag[];
};
