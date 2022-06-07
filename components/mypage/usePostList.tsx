import post from '@lib/api/post';
import { storage } from '@lib/storage';
import { useQuery } from 'react-query';
import { PostListResponseDto } from 'types/response';

type postType = 'write' | 'likes';

const usePostList = (type: postType) => {
  const { isLoading, data, error } = useQuery<PostListResponseDto[]>(
    ['myPostList', storage.getUserId()],
    type === 'write' ? async () => (await post.getMyPostList()).data : async () => (await post.getLikePostList()).data,
  );
  return { isLoading, postList: data, error };
};
export default usePostList;
