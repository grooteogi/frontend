import { fetchedHashtag } from 'types/fetchedHashtag';
import { ScheduleType } from 'types/scheduleType';
import Layout from './Layout';
import MeetingInfo from './MeetingInfo';
import ReviewList from './ReviewList';
import ShowSchedule from './ShowSchedule';

type MeetingInfoType = {
  id: number;
  title: string;
  imageUrl: string;
  username: string;
  location: string;
  place: string;
  content: string;
  liked: boolean;
  postHashtags: fetchedHashtag[];
};

type ReviewType = {
  id: number;
  userProfilePicSrc: string;
  username: string;
  createTime: string;
  text: string;
};

type Post = {
  meetingInfo: MeetingInfoType;
  schedule: ScheduleType;
  reviews: ReviewType[];
};

const Create = () => {
  const sampleHashtags: fetchedHashtag[] = [
    { id: 1, hashtagType: 'CONCERN', tag: '대학생활', registered: '' },
    { id: 2, hashtagType: 'CONCERN', tag: '편입', registered: '' },
  ];
  const postInfo = {
    postPicSrc: '/imgs/RotatedImg.png',
    postTitle: '즐거운 코딩시간. 오늘도 만든다 작업물',
    userPicSrc: '/imgs/Carousel2.png',
    username: '대외활동 마스터',
    location: '서울 · 서대문구',
    hashtags: sampleHashtags,
    description:
      '이것은 어쩌구저쩌구 내용입니다. 저는 지금 학교인데 우리 학교 왜이리 변했어요. 내가 알던 우리 학교가 아니야... 추억이 가득 담긴 노랑통닭',
  };
  const itemList = [
    {
      id: 1,
      startTime: '2022-04-26 9:00',
      endTime: '2022-04-26 11:45',
      location: '신촌',
      place: '신촌근처 아무 식당 (협의)',
    },
    {
      id: 2,
      startTime: '2022-04-26 12:40',
      endTime: '2022-04-26 14:00',
      location: '합정',
      place: '망원동 티라미수',
    },
    {
      id: 3,
      startTime: '2022-04-27 10:30',
      endTime: '2022-04-27 14:00',
      location: '이대',
      place: '명지대 나라비',
    },
  ];
  const reviews = [
    {
      id: 1,
      username: '졸리다',
      userProfilePicSrc: '/imgs/Carousel1.png',
      createTime: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
      id: 2,
      username: '지금은 새벽 3시',
      userProfilePicSrc: '/imgs/Carousel2.png',
      createTime: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
    {
      id: 3,
      username: '왜 에러떠',
      userProfilePicSrc: '/imgs/Carousel3.png',
      createTime: '2022-04-26 12:40',
      text: '대외활동 다수 경험, 공모전 수상 팁들 알려주셨어요. 덕분에 대학생활 제대로 할 수 있을 것 같아요!!!',
    },
  ];
  return (
    <Layout>
      <MeetingInfo {...postInfo} />
      <ShowSchedule itemList={itemList} />
      <ReviewList reviewList={reviews} />
    </Layout>
  );
};

export default Create;
