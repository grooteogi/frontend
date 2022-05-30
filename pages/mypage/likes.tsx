import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import SideBar from '../../components/mypage/SideBar/SideBar';
import postList from '../../components/mypage/likes.mock.json';
import { nanoid } from 'nanoid';
import Button from '@components/common/Button';
import MyPagePostCard from '@components/mypage/MyPagePostCard';

const ReservationPage = () => {
  return (
    <>
      <Layout.PageContent>
        <Layout.SectionLeft>
          <SideBar />
        </Layout.SectionLeft>
        <Layout.SectionRight>
          <Layout.PageTitle>
            <Title size={'h1'} color={'black'}>
              찜한 포스트
            </Title>
          </Layout.PageTitle>
          <Layout.listWrapper>
            {postList.map(post => (
              <Layout.myPageItem key={nanoid()}>
                <MyPagePostCard key={nanoid()} post={post} />
              </Layout.myPageItem>
            ))}
          </Layout.listWrapper>
        </Layout.SectionRight>
      </Layout.PageContent>
    </>
  );
};

export default ReservationPage;
