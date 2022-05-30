import { useState } from 'react';
import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import Button from '@components/common/Button';
import SideBar from '@components/mypage/SideBar';
import Textarea from '@components/common/Textarea';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import reservation from '../../../components/mypage/review.create.mock.json';
import FullHeart from '../../../public/icons/full_heart.svg';
import EmptyHeart from '../../../public/icons/empty_heart.svg';
import Typography from '@components/common/Typography';

const ReservationPage = () => {
  const [isLiked, setLike] = useState(reservation.likes.liked);
  const likeClicked = (e: React.MouseEvent) => {
    e.preventDefault();
    setLike(!isLiked);
    console.log(isLiked);
  };

  return (
    <>
      <Layout.PageContent>
        <Layout.SectionLeft>
          <SideBar />
        </Layout.SectionLeft>
        <Layout.SectionRight>
          <Layout.PageTitle>
            <Title size={'h1'} color={'black'}>
              리뷰 등록
            </Title>
          </Layout.PageTitle>
          <Layout.listWrapper>
            <Layout.myPageItem>
              <MyPageCard reservation={reservation} />
              <Layout.heatBox>
                {isLiked ? <FullHeart onClick={likeClicked} /> : <EmptyHeart onClick={likeClicked} />}
                <Typography size={'xxs'} color={'gray400'}>
                  {reservation.likes.count}
                </Typography>
              </Layout.heatBox>
            </Layout.myPageItem>
            <Layout.inputListBox>
              <Layout.inputListItem>
                <Title size={'h3'} color={'black'}>
                  오늘의 약속은 어떘나요?
                </Title>
                <Rate allowHalf defaultValue={5}></Rate>
              </Layout.inputListItem>
              <Layout.inputListItem>
                <Title size={'h3'} color={'black'}>
                  어떤 점이 좋았나요?
                </Title>
                <Textarea />
              </Layout.inputListItem>
              <Button name={'완료하기'} color={'primary'} fontColor={'white'} size={'lg'} />
            </Layout.inputListBox>
          </Layout.listWrapper>
        </Layout.SectionRight>
      </Layout.PageContent>
    </>
  );
};

export default ReservationPage;
