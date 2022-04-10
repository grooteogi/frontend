import axios from 'axios';

interface ResponseData {
  status: number;
  message: string;
  data: JSON;
}

export const getData = async (url: string) => {
  const res = await axios({
    method: 'get',
    url: url,
    withCredentials: true,
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
  const res = await axios({
    method: 'post',
    data: data,
    url: url,
    withCredentials: true,
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

export const putData = async (url: string, data: ResponseData) => {
  const res = await axios({
    method: 'put',
    data: data,
    url: url,
    withCredentials: true,
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

export const deleteData = async (url: string, data: ResponseData) => {
  const res = await axios({
    method: 'delete',
    data: data,
    url: url,
    withCredentials: true,
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
