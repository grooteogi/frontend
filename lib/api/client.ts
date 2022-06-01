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
  headers: { Authorization: `Bearer ${storage.getToken()}`, 'Content-Type': 'application/json' },
  withCredentials: true,
});

const handleResponse: any = (response: ResponseData, callback: any, url: string) => {
  const { status, message } = response.data;

  console.log(`${status}: ${message}`);

  switch (status) {
    case 200:
      return response.data;
    case 202:
      if (response.headers) storage.setToken(response.headers['x-auth-token']);
      return callback(url);
  }
};

const handleError = (error: any) => {
  const response = error.response?.data;

  if (error.response?.data) {
    const { status, message } = response;
    console.error(`${status}: ${message}`);
    return response;
  } else {
    console.error(error);
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
  delete: async function (url: string, data: ResponseData): Promise<ResponseData> {
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
