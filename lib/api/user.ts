import { ModifyUserPasswordRequestDto, ModifyUserProfileRequestDto } from 'types/request';
import client from './client';

const user = {
  //   postHashtag: async (hashtag: string[]) => {
  //     const url = '/hashtag/post';
  //     const status = await postData(url, { hashtag });
  //     return status;
  //   },
  getProfile: async () => {
    const url = '/user/profile';
    return await client.get(url);
  },
  modifyProfile: async (profile: ModifyUserProfileRequestDto) => {
    const url = '/user/profile';
    return await client.patch(url, profile);
  },
  modifyPassword: async (password: ModifyUserPasswordRequestDto) => {
    const url = '/user/password';
    return await client.patch(url, password);
  },
};

export default user;
