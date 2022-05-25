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

export const getData = async (url: string) => {
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
};

export const postData = async (url: string, data: any) => {
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
};

export const putData = async (url: string, data: ResponseData) => {
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
};

export const deleteData = async (url: string, data: ResponseData) => {
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
};
