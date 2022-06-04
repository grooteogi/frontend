import Layout from '@components/mypage/layout';
import postList from '../../components/mypage/likes.mock.json';
import { nanoid } from 'nanoid';
import MyPagePostCard from '@components/mypage/MyPagePostCard';
import Content from '@components/mypage/Content';

const ReservationPage = () => {
  return (
    <Content title={'찜한 포스트'}>
      <Layout.listWrapper>
        {postList.map(post => (
          <Layout.myPageItem key={nanoid()}>
            <MyPagePostCard key={nanoid()} post={post} />
          </Layout.myPageItem>
        ))}
      </Layout.listWrapper>
    </Content>
  );
};

export default ReservationPage;
