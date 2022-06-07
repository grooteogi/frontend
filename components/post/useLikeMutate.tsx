import post from '@lib/api/post';
import { useMutation } from 'react-query';

const useLikeMutate = () => {
  const { mutate, error, isSuccess } = useMutation((postId: string) => post.updateLike(postId));

  return { mutate, error, isSuccess };
};

export default useLikeMutate;
