import post from '@lib/api/post';
import { useQuery } from 'react-query';
import { ScheduleEntity } from 'types/entity';

const useSchedules = (postId: string) => {
  const { isLoading, data, error } = useQuery<ScheduleEntity[]>(
    ['schedules', postId],
    async () => (await post.getSchedules(postId)).data,
  );
  return { isLoading, schedulesData: data, error };
};

export default useSchedules;
