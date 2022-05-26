import { AuthEntity } from 'types/entity';
import { storage } from '../storage';
import client, { GAxios } from './client';

const auth = {
  signupUser: async (userInfo: any) => {
    const url = '/auth/register';
    const status = await client.post(url, userInfo);
    return status;
  },
  signinUser: async (userInfo: AuthEntity) => {
    const url = '/auth/login';
    const user = await GAxios({ method: 'post', url, data: userInfo, withCredentials: true })
      .then(res => {
        const token = res.headers['x-auth-token'];
        console.log('token', token);
        storage.setToken(token);
        return res.status;
      })
      .catch(err => {
        if (!err.status) console.log('Unknown Network Error in axios');
        else {
          //   console.error(err);
          return err.status;
        }
      });
    return user;
  },
  sendEmail: async (email: string) => {
    const url = '/user/email-verification/create';
    const status = await client.post(url, { email });
    return status;
  },
  confirmEmail: async (validForm: { email: string; code: string }) => {
    const url = '/user/email-verification/confirm';
    const status = await client.post(url, validForm);
    return status;
  },
  resendEmail: async (email: string) => {
    const url = '/user/email-verification/create';
    const status = await client.post(url, { email });
    return status;
  },
};

export default auth;
