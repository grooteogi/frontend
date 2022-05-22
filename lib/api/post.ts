import { storage } from '../storage';
import { postData, GAxios, deleteData } from './restApi';

const post = {
  deletePost: async (postId: { postId: number }) => {
    const url = '/post/${postId}';
    const data = {
      status: 200,
    };
    const status = await deleteData(url, data);
    return status;
  },
  createPost: async (post: any) => {
    const url = '/post';
    const status = await postData(url, post);
    return status;
  },
};

export default post;
