import type { NextPage } from 'next';
import { Formik } from 'formik';
import { CreditType } from 'types/enum';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PostEditRequestDto } from 'types/request';

import Layout from '@components/post/layout';
import ScheduleEdit from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';

import usePost from '@components/post/usePost';
import useRouteWarning from '@hooks/useRouteWarning';
import post from '@lib/api/post';
import moment from 'moment';

import useSchedules from '@components/post/useSchedules';
import { dehydrate, QueryClient } from 'react-query';
import { validEmptyData } from '@lib/validator';

const PostEditPage: NextPage = () => {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  const postId = router.query.postId as string;
  const { postData } = usePost(postId);
  const { schedulesData } = useSchedules(postId);

  useRouteWarning(saved, '포스트가 저장되지 않았습니다. 정말 나가시겠습니까?');

  const handleSubmit = async (data: PostEditRequestDto) => {
    if (validEmptyData(data)) {
      return alert('빈 항목이 있습니다.');
    }
    const response = await post.modifyPost(data);
    if (response.status === 200) {
      alert('약속 수정 완료!');
      router.push('/');
    } else alert('포스트수정 실패!');
  };

  return (
    <Formik
      initialValues={{
        postId: postData?.postId ?? '',
        title: postData?.title ?? '',
        content: postData?.content ?? '',
        imageUrl: postData?.imageUrl ?? '',
        hashtags: postData?.hashtags ?? [],
        creditType: postData?.creditType
          ? CreditType[postData.creditType as unknown as keyof typeof CreditType]
          : CreditType['DIRECT' as const],
        schedules: schedulesData ?? [],
      }}
      enableReinitialize={true}
      onSubmit={async (data: PostEditRequestDto) => {
        const { schedules, creditType } = data;
        schedules.forEach(({ startTime, endTime }: { startTime: string; endTime: string }, index: number) => {
          schedules[index].startTime = moment(startTime, 'HH:mm:ss').format('HH:mm:ss');
          schedules[index].endTime = moment(endTime, 'HH:mm:ss').format('HH:mm:ss');
        });
        data.creditType =
          Object.keys(CreditType).find(key => CreditType[key as keyof typeof CreditType] === creditType) ??
          CreditType['DIRECT' as keyof typeof CreditType];
        setSaved(true);
        handleSubmit(data);
      }}
    >
      <Layout.container>
        <MeetingInfoEdit />
        <ScheduleEdit />
      </Layout.container>
    </Formik>
  );
};

export async function getServerSideProps(ctx: { params: { postId: string } }) {
  const postId = ctx.params.postId;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', postId], async () => (await post.getPost(postId)).data);
  await queryClient.prefetchQuery(['schedules', postId], async () => (await post.getSchedules(postId)).data);

  return { props: { dehydratedState: dehydrate(queryClient) } };
}

export default PostEditPage;
