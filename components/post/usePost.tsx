import post from '@lib/api/post';
import { useQuery } from 'react-query';
import { PostDetailResponseDto } from 'types/response';

const usePost = (postId: string) => {
  const { isLoading, data, error } = useQuery<PostDetailResponseDto>(
    ['post', postId],
    async () => (await post.getPost(postId)).data,
    {
      initialData: {
        postId: '',
        title: '',
        content: '',
        imageUrl: '',
        createAt: '',
        hashtags: [],
        creditType: 'DIRECT',
        likes: {
          count: 0,
          liked: false,
        },
        mentor: {
          userId: 0,
          nickname: '',
          imageUrl: '',
        },
        isAuthor: false,
      },
    },
  );
  console.log('post', data);
  return { isLoading, postData: data, error };
};

export default usePost;
