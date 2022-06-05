import { storage } from '@lib/storage';
import axios, { AxiosResponseHeaders } from 'axios';

interface ResponseData {
  headers?: AxiosResponseHeaders;
  status: number;
  message?: string;
  data?: any;
}

export const GAxios = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: storage.validateToken() ? `Bearer ${storage.getToken()}` : '',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const handleResponse: any = async (response: ResponseData, callback: any, url: string) => {
  const { status, message } = response.data;

  console.log(`${status}: ${message}`);

  if (status === 200) {
    return response.data;
  } else if (status === 202) {
    if (response.headers && response.headers['x-auth-token']) storage.setToken(response.headers['x-auth-token']);
    return (await callback(url)).data;
  }
};

const handleError = (error: any) => {
  const response = error.response?.data;

  if (error.response?.data) {
    const { status, message } = response;
    console.error(`${status}: ${message}`);
    return response;
  } else {
    return response;
  }
};

const client = {
  get: async function (url: string): Promise<ResponseData> {
    return await GAxios({
      method: 'get',
      url: url,
    })
      .then(res => handleResponse(res, this.get, url))
      .catch(handleError);
  },
  post: async function (url: string, data: any): Promise<ResponseData> {
    console.log('post');
    return await GAxios({
      method: 'post',
      data: data,
      url: url,
    })
      .then(res => handleResponse(res, this.post, url))
      .catch(handleError);
  },
  put: async function (url: string, data: ResponseData): Promise<ResponseData> {
    return await GAxios({
      method: 'put',
      data: data,
      url: url,
    })
      .then(res => handleResponse(res, this.put, url))
      .catch(handleError);
  },
  patch: async function (url: string, data: any): Promise<ResponseData> {
    return await GAxios({
      method: 'patch',
      data: data,
      url: url,
    })
      .then(res => handleResponse(res, this.patch, url))
      .catch(handleError);
  },
  delete: async function (url: string, data: any): Promise<ResponseData> {
    return await GAxios({
      method: 'delete',
      data: data,
      url: url,
    })
      .then(res => handleResponse(res, this.delete, url))
      .catch(handleError);
  },
};

export default client;
