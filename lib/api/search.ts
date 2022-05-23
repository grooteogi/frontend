import { getData } from './restApi';

const search = {
  getHashtags: async () => {
    // const url = `/hashtags`;
    const url = `https://6285b1c296bccbf32d66c1f2.mockapi.io/hashtags`;
    const status = await getData(url);
    return status;
  },
  getPosts: async (params: { keyword: string; sort: string; region: string; pageParam: number }) => {
    const { keyword, sort, region, pageParam } = params;
    console.log('params ', keyword, sort, region, pageParam);
    const url = `https://6285b1c296bccbf32d66c1f2.mockapi.io/post${pageParam}`;
    const status = await getData(url);
    return status;
  },
};

export default search;
