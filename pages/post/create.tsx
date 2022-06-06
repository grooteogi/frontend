import { useRouter, withRouter } from 'next/router';
import type { NextPage } from 'next';
import ScheduleEdit from '@components/post/ScheduleEdit/ScheduleEdit';
import MeetingInfoEdit from '@components/post/MeetingInfoEdit/MeetingInfoEdit';
import Layout from '@components/post/layout';
import post from '@lib/api/post';
import { PostCreateRequestDto } from 'types/request';
import { Formik } from 'formik';
import { CreditType } from 'types/enum';
import useRouteWarning from '@hooks/useRouteWarning';
import { useState } from 'react';
import moment from 'moment';
import { validEmptyData } from '@lib/validator';

const Create: NextPage = () => {
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  useRouteWarning(saved, '포스트가 저장되지 않았습니다. 정말 나가시겠습니까?');

  const handleSubmit = async (data: PostCreateRequestDto) => {
    if (validEmptyData(data, ['imageUrl'])) {
      return alert('빈 항목이 있습니다.');
    }
    const response = await post.createPost(data);
    if (response.status === 200) {
      alert('약속 생성 완료!');
      router.push(`/post/${response.data.postId}`);
    } else alert('포스트생성 실패!');
  };

  return (
    <Formik
      initialValues={{
        title: '',
        content: '',
        imageUrl: '',
        hashtags: [],
        creditType: CreditType['DIRECT' as keyof typeof CreditType],
        schedules: [],
      }}
      onSubmit={async (data: PostCreateRequestDto) => {
        const { schedules, creditType } = data;
        schedules.forEach(({ startTime, endTime }: { startTime: string; endTime: string }, index: number) => {
          schedules[index].startTime = moment(startTime, 'HH:mm:ss').format('HH:mm:ss');
          schedules[index].endTime = moment(endTime, 'HH:mm:ss').format('HH:mm:ss');
        });
        data.creditType =
          Object.keys(CreditType).find(key => CreditType[key as keyof typeof CreditType] === creditType) ??
          CreditType['DIRECT' as keyof typeof CreditType];
        console.log(data);
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

export default withRouter(Create);
