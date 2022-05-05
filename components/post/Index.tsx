import Layout from './Layout';
import MeetingInfo from './MeetingInfo';
import ReviewList from './ReviewList';
import ShowSchedule from './ShowSchedule';

type Post = {
  meetingInfo: {
    id: number;
    title: string;
    imageUrl: string;
    username: string;
    location: string;
    place: string;
    content: string;
    views: number;
    createDate: string;
    modifiedDate: string;
    liked: boolean;
    postHashtags: [
      {
        id: number;
        registered: string;
        hashTag: {
          id: number;
          hashtagType: 'PERSONALITY' | 'CONECERN';
          tag: string;
          registered: string;
          count: number;
        };
      },
    ];
  };
  schedule: {
    payMethod: '만나서 결제' | '더치페이' | '사주세요' | '사줄게요';
    promises: [
      {
        date: string;
        startTime: string;
        endTime: string;
        location: string;
        place: string;
      },
    ];
  };
  reviews: [
    {
      id: number;
      userProfilePicSrc: string;
      username: string;
      createTime: string;
      text: string;
    },
  ];
};

const Index = ({ meetingInfo, schedule, reviews }: Post) => {
  return (
    <Layout>
      <MeetingInfo
        postPicSrc={meetingInfo.imageUrl}
        postTitle={meetingInfo.title}
        userPicSrc={''}
        hashtags={[]}
        description={''}
        {...meetingInfo}
      />
      <ShowSchedule {...schedule} />
      <ReviewList reviewList={reviews} />
    </Layout>
  );
};

export default Index;
