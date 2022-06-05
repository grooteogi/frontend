import { storage } from '@lib/storage';
import axios from 'axios';

const image = {
  upload: async (formData: FormData) => {
    const url = `/s3/image`;
    const res = await axios
      .post(url, formData, {
        baseURL: '/groot/api',
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${storage.getToken()}` },
        withCredentials: true,
      })
      .then(res => {
        return res.data;
      })
      .catch(err => console.error(err));

    return res;
  },
};

export default image;
