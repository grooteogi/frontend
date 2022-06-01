import post from '@lib/api/post';
import { useQuery } from 'react-query';
import { PostEntity } from 'types/entity';

const usePost = (postId: string) => {
  const { isLoading, data, error } = useQuery<PostEntity>(
    ['post', postId],
    async () => (await post.getPost(postId)).data,
  );
  console.log('post', data);
  return { isLoading, postData: data, error };
};

export default usePost;
