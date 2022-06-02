import { ModifyUserProfileRequestDto } from 'types/request';
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
    console.log('수정할 프로파일', profile);
    return await client.patch(url, profile);
  },
};

export default user;
