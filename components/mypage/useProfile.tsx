import user from '@lib/api/user';
import { useMutation, useQuery } from 'react-query';
import { UserProfileResponseDto } from 'types/response';

export const useProfile = () => {
  const { isLoading, data, error } = useQuery<UserProfileResponseDto>(
    ['profile'],
    async () => (await user.getProfile()).data,
    { refetchOnWindowFocus: false, cacheTime: 0 },
  );
  console.log('profile', data);
  return { isLoading, profile: data, error };
};

export const useProfileMutation = () => {
  return useMutation(user.modifyProfile);
};
