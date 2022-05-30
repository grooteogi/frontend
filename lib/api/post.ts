import { SearchStateType } from '@components/search/context';
import { SortType } from 'types/enum';
import client from './client';

export const post = {
  deletePost: async (postId: number) => {
    const url = `/post/${postId}`;
    return await client.delete(url, { status: 200 });
  },
  createPost: async (post: any) => {
    const url = `/post`;
    console.log(post);
    return await client.post(url, post);
  },
  modifyPost: async (post: any) => {
    const url = `/post/${post.postId}`;
    return await client.put(url, post);
  },
  getPost: async (postId: number) => {
    const url = `/post/${postId}`;
    return await client.get(url);
  },
  updatePostImg: async (formData: FormData) => {
    const url = `/s3/image`;
    return await client.post(url, formData);
  },
  getSchedules: async (postId: number) => {
    const url = `post/${postId}/schedules`;
    return await client.get(url);
  },
  getReviews: async (postId: number) => {
    const url = `post/${postId}/reviews`;
    return await client.get(url);
  },
  //   detailLikes: async (postId: number) => {
  //     const url = `post/${postId}/like`;
  //     const res = await getData(url);
  //     return res;
  //   },
  getHashtags: async (postId: number) => {
    const url = `post/${postId}/hashtags`;
    return await client.get(url);
  },
  search: async (params: { searchState: SearchStateType; pageParam: number }) => {
    const { searchState, pageParam } = params;
    const { keyword, sort, region } = searchState;
    const sortValue = SortType[sort as keyof typeof SortType];
    const url = `/post/search?keyword=${keyword}&page=${pageParam}&filter=${sortValue}&region=${region}`;
    console.log(url);
    return await client.get(url);
  },
};

export default post;
