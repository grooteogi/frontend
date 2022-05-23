import { storage } from '../storage';
import { postData, GAxios, deleteData, putData, getData } from './restApi';

export const post = {
  deletePost: async (postId: number) => {
    const url = `/post/${postId}`;
    const status = await deleteData(url, { status: 200 });
    return status;
  },
  createPost: async (post: any) => {
    const url = `/post`;
    const status = await postData(url, post);
    return status;
  },
  modifyPost: async (post: any) => {
    const url = `/post/${post.postId}`;
    const res = await putData(url, post);
    return res;
  },
  detailPost: async (postId: number) => {
    const url = `/post/${postId}`;
    const res = await getData(url);
    return res;
  },
  updatePostImg: async (formData: FormData) => {
    const url = `/s3/image`;
    const res = await postData(url, formData);
    return res;
  },
  detailSchedules: async (postId: number) => {
    const url = `post/${postId}/schedules`;
    const res = await getData(url);
    return res;
  },
  detailReviews: async (postId: number) => {
    const url = `post/${postId}/reviews`;
    const res = await getData(url);
    return res;
  },
  // detailLikes :async (postId: number) => {
  //     const url = `post/${postId}/like`;
  //     const res = await getData(url);
  //     return res;
  // },
  detailHashtags: async (postId: number) => {
    const url = `post/${postId}/hashtags`;
    const res = await getData(url);
    return res;
  },
};

export default post;
