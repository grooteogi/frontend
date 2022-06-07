import { PostEditRequestDto } from './../../types/request';
import { PostCreateRequestDto } from 'types/request';
import { SearchStateType } from '@components/search/context';
import { SortType } from 'types/enum';
import client from './client';

export const post = {
  deletePost: async (postId: string) => {
    const url = `/post/${postId}`;
    return await client.delete(url, {});
  },
  createPost: async (post: PostCreateRequestDto) => {
    const url = `/post`;
    console.log(post);
    return await client.post(url, post);
  },
  modifyPost: async (post: PostEditRequestDto) => {
    const url = `/post/${post.postId}`;
    return await client.put(url, post);
  },
  getPost: async (postId: string) => {
    const url = `/post/detail/${postId}`;
    return await client.get(url);
  },
  updatePostImg: async (formData: FormData) => {
    const url = `/s3/image`;
    return await client.post(url, formData);
  },
  getSchedules: async (postId: string) => {
    const url = `post/schedules/${postId}`;
    return await client.get(url);
  },
  getReviews: async (postId: string) => {
    const url = `post/reviews/${postId}`;
    return await client.get(url);
  },
  updateLike: async (postId: string) => {
    const url = `/post/${postId}/like`;
    return await client.get(url);
  },
  getHashtags: async (postId: number) => {
    const url = `post/${postId}/hashtags`;
    return await client.get(url);
  },
  search: async (params: { searchState: SearchStateType; pageParam: number }) => {
    const { searchState, pageParam } = params;
    const { hashtag, keyword, sort, region } = searchState;
    const sortValue = SortType[sort as keyof typeof SortType];
    console.log('keyword', keyword, ' region', region);
    const url = `/post/search?hashtag=${hashtag}&keyword=${encodeURIComponent(
      keyword,
    )}&page=${pageParam}&filter=${sortValue}&region=${encodeURIComponent(region)}`;
    console.log(url);
    return await client.get(url);
  },
  getMyPostList: async () => {
    const url = `/post/writer`;
    return await client.get(url);
  },
  getLikePostList: async () => {
    const url = `post/likes`;
    return await client.get(url);
  },
  getSearchHashtags: async () => {
    const url = `/hashtag`;
    return await client.get(url);
  },
};

export default post;
