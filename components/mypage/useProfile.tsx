import user from '@lib/api/user';
import { useQuery } from 'react-query';
import { UserProfileResponseDto } from 'types/response';

const useProfile = () => {
  const { isLoading, data, error } = useQuery<UserProfileResponseDto>(
    ['profile'],
    async () => (await user.getProfile()).data,
  );
  console.log('profile', data);
  return { isLoading, profile: data, error };
};

export default useProfile;
