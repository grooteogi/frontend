import { SortType } from 'types/enum';
import client from './client';

export const post = {
  deletePost: async (postId: number) => {
    const url = `/post/${postId}`;
    const status = await client.delete(url, { status: 200 });
    return status;
  },
  createPost: async (post: any) => {
    const url = `/post`;
    console.log(post);
    const status = await client.post(url, post);
    return status;
  },
  modifyPost: async (post: any) => {
    const url = `/post/${post.postId}`;
    const res = await client.put(url, post);
    return res;
  },
  detailPost: async (postId: number) => {
    const url = `/post/${postId}`;
    const res = await client.get(url);
    return res;
  },
  updatePostImg: async (formData: FormData) => {
    const url = `/s3/image`;
    const res = await client.post(url, formData);
    return res;
  },
  detailSchedules: async (postId: number) => {
    const url = `post/${postId}/schedules`;
    const res = await client.get(url);
    return res;
  },
  detailReviews: async (postId: number) => {
    const url = `post/${postId}/reviews`;
    const res = await client.get(url);
    return res;
  },
  // detailLikes :async (postId: number) => {
  //     const url = `post/${postId}/like`;
  //     const res = await getData(url);
  //     return res;
  // },
  detailHashtags: async (postId: number) => {
    const url = `post/${postId}/hashtags`;
    const res = await client.get(url);
    return res;
  },
  search: async (params: { keyword: string; sort: string; region: string; pageParam: number }) => {
    const { keyword, pageParam, sort, region } = params;
    const sortValue = SortType[sort as keyof typeof SortType];
    const url = `/post/search?keyword=${keyword}&page=${pageParam}&filter=${sortValue}&region=${region}`;
    const res = await client.get(url);
    return res;
  },
};

export default post;
