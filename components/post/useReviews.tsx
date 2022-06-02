import post from '@lib/api/post';
import { useQuery } from 'react-query';
import { ReviewEntity } from 'types/entity';

const useReviews = (postId: string) => {
  const { isLoading, data, error } = useQuery<ReviewEntity[]>(
    ['reviews', postId],
    async () => (await post.getReviews(postId)).data,
  );
  console.log('reviews', data);
  return { isLoading, reviewsData: data, error };
};

export default useReviews;
