import { storage } from '../storage';
import { postData } from './restApi';
export const END_POINT_API = 'https://localhost:8080'; // env 로 나누기

interface ResponseData {
  status: number;
  message: string;
  data?: JSON;
}

export const signupUser = async (userInfo: any) => {
  const url = 'http://localhost:8080/user/register';
  const user = await postData(url, userInfo);
  return user;
};

export const signinUser = async (userInfo: any) => {
  const url = 'http://localhost:8080/user/login';
  const user = await postData(url, userInfo);
  return user;
};

export const verifyEmail = async ({ email }: { email: string; code: string }) => {
  const url = 'http://localhost:8080/user/email-verification/create';
  const res = await postData(url, email);
  return res;
};

export const confirmEmail = async (validForm: { email: string; code: string }) => {
  const url = 'http://localhost:8080/user/email-verification/create';
  const res = await postData(url, validForm);
  return res;
};
