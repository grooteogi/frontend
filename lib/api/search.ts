import axios from 'axios';

const search = {
  getHashtags: async () => {
    const status = axios
      .get(`https://6285b1c296bccbf32d66c1f2.mockapi.io/hashtags`)
      .then(res => res.data)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
    return status;
  },
  getPosts: async (params: { keyword: string; sort: string; region: string; pageParam: number }) => {
    const { keyword, sort, region, pageParam } = params;
    console.log('params ', keyword, sort, region, pageParam);
    const status = axios
      .get(`https://6285b1c296bccbf32d66c1f2.mockapi.io/post${pageParam}`)
      .then(res => res.data)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
    return status;
  },
};

export default search;
