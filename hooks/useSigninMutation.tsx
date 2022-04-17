import { useMutation, UseMutationResult } from 'react-query';
import { signinUser } from '../lib/api/auth';

const useSigninMutation = (userInfo: any) => {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation<UseMutationResult>(() => signinUser(userInfo));
  return { mutate, isLoading, isError, error, isSuccess };
};

export default useSigninMutation;
