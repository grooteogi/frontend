import { useMutation, UseMutationResult } from 'react-query';
import auth from '@lib/api/auth';

const useSigninMutation = (userInfo: any) => {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation<UseMutationResult>(() =>
    auth.signinUser(userInfo),
  );
  return { mutate, isLoading, isError, error, isSuccess };
};

export default useSigninMutation;
