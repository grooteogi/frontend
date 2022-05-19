import { getData } from './restApi';

const search = {
  getHashtags: async () => {
    // const url = `/hashtags`;
    const url = `https://6285b1c296bccbf32d66c1f2.mockapi.io/hashtags`;
    const status = await getData(url);
    return status;
  },
  getPosts: async (params: any) => {
    // const url = `/post/search/${params}`;
    const url = `https://6285b1c296bccbf32d66c1f2.mockapi.io/post`;
    const status = await getData(url);
    return status;
  },
};

export default search;
