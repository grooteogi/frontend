import { AuthEntity } from 'types/entity';
import { storage } from '../storage';
import client, { GAxios } from './client';

const auth = {
  signupUser: async (userInfo: AuthEntity) => {
    const url = '/auth/register';
    return await client.post(url, userInfo);
  },
  signinUser: async (userInfo: AuthEntity) => {
    const url = '/auth/login';
    return await GAxios({ method: 'post', url, data: userInfo, withCredentials: true })
      .then(res => {
        const token = res.headers['x-auth-token'];
        storage.setToken(token);
        return res.status;
      })
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          return err.status;
        }
      });
  },
  withDrawal: async () => {
    const url = '/auth/withdrawal';
    return await GAxios({ method: 'delete', url, withCredentials: true })
      .then(res => {
        const { status, message } = res.data;
        console.log(`${status}: ${message}`);
        return status;
      })
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else return err.status;
      });
  },
  sendEmail: async (email: string) => {
    const url = '/auth/email/send';
    return await client.post(url, { email });
  },
  confirmEmail: async (validForm: { email: string; code: string }) => {
    const url = '/auth/email/check';
    return await client.post(url, validForm);
  },
  resendEmail: async (email: string) => {
    const url = '/auth/email/send';
    return await client.post(url, { email });
  },
};

export default auth;
