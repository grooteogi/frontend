import post from '@lib/api/post';
import { useQuery } from 'react-query';
import { PostEntity } from 'types/entity';

const useReviews = (postId: string) => {
  const { isLoading, data, error } = useQuery<PostEntity>(
    ['reviews', postId],
    async () => (await post.getPost(postId)).data,
  );

  return { isLoading, postData: data, error };
};

export default useReviews;
