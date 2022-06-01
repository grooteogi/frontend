import { ModifyUserProfileRequestDto } from 'types/request';
import client from './client';

const user = {
  //   postHashtag: async (hashtag: string[]) => {
  //     const url = '/hashtag/post';
  //     const status = await postData(url, { hashtag });
  //     return status;
  //   },
  modifyProfile: async (profile: ModifyUserProfileRequestDto) => {
    const url = '/user/profile';
    /user/efilopr;
    const status = await client.patch(url, { profile });
    return status;
  },
};

export default user;
