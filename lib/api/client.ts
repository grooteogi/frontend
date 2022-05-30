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
    return await GAxios({
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
  },
  post: async (url: string, data: any) => {
    return await GAxios({
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
  },
  put: async (url: string, data: ResponseData) => {
    return await GAxios({
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
  },
  delete: async (url: string, data: ResponseData) => {
    return await GAxios({
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
  },
};

export default client;

// export const client.get =

// export const client.post = ;

// export const client.put = ;

// export const client.delete = ;
