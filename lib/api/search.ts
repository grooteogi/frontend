import { getData } from './restApi';

const search = {
  getAllPost: async (search: string, cursor: number) => {
    const url = `/post?search=${search}&cursor=${cursor}`;
    const status = await getData(url);
    return status;
  },
  getPostDetail: async (postId: number) => {
    const url = `/post/${postId}`;
    const status = await getData(url);
    return status;
  },
};

export default search;
