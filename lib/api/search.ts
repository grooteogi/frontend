import { SearchStateType } from '@components/search/context';
import axios from 'axios';
import { SortType } from 'types/enum';

const search = {
  getHashtags: async () => {
    return axios
      .get(`https://6285b1c296bccbf32d66c1f2.mockapi.io/hashtags`)
      .then(res => res.data)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
  },

  getPosts: async (params: { searchState: SearchStateType; pageParam: number }) => {
    const { searchState, pageParam } = params;
    const { keyword, sort, region } = searchState;
    const sortValue = SortType[sort as keyof typeof SortType];
    console.log('params ', keyword, sortValue, region, pageParam);
    return axios
      .get(`https://6285b1c296bccbf32d66c1f2.mockapi.io/post${pageParam}`)
      .then(res => res.data)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
  },
};

export default search;
