import { storage } from '@lib/storage';
import axios from 'axios';

interface ResponseData {
  status: number;
  message?: string;
  data?: JSON;
}

export const GAxios = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const client = {
  get: async (url: string) => {
    const res = await GAxios({
      method: 'get',
      url: url,
    })
      .then(res => res.data)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
    return res;
  },
  post: async (url: string, data: any) => {
    const res = await GAxios({
      headers: { Authorization: `Bearer ${storage.getToken()}` },
      method: 'post',
      data: data,
      url: url,
    })
      .then(res => res.status)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
    return res;
  },
  put: async (url: string, data: ResponseData) => {
    const res = await GAxios({
      method: 'put',
      data: data,
      url: url,
    })
      .then(res => res.status)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
    return res;
  },
  delete: async (url: string, data: ResponseData) => {
    const res = await GAxios({
      method: 'delete',
      data: data,
      url: url,
    })
      .then(res => res.status)
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          console.error(err);
          throw err;
        }
      });
    return res;
  },
};

export default client;

// export const client.get =

// export const client.post = ;

// export const client.put = ;

// export const client.delete = ;
