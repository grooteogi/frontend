import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import SideBar from '../../components/mypage/SideBar/SideBar';
import reservationList from '../../components/mypage/apply.mock.json';
import { nanoid } from 'nanoid';
import Button from '@components/common/Button';
import { useState } from 'react';
import Alert from '@components/mypage/Alert';
import Link from 'next/link';

const idx = 0;
const ReservationPage = () => {
  const now = new Date();
  const openModalList = Array(reservationList.length).fill(false);
  const [openModal, setOpenModal] = useState(false);
  const onDeleteReview = (idx: number) => {
    console.log(`${idx}번째 아이템 삭제`);
  };
  const toggleModal = (e: React.MouseEvent, idx: number) => {
    console.log(`${idx}번째 아이템 토글 오픈`);
    console.log(e.target);
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
              신청한 약속
            </Title>
          </Layout.PageTitle>
          <Layout.listWrapper>
            {reservationList.map(reservation => (
              <Layout.myPageItem key={nanoid()}>
                <MyPageCard key={idx} reservation={reservation} />
                {new Date(reservation.date + ' ' + reservation.startTime).getTime() > now.getTime() ? (
                  <Button
                    name={'취소하기'}
                    color={'gray300'}
                    fontColor={'white'}
                    size={'sm'}
                    onClick={() => {
                      onDeleteReview(idx);
                    }}
                  />
                ) : reservation.score === 0 ? (
                  <Link href={'/mypage/reviews/create'} passHref>
                    <Button name={'리뷰쓰기'} color={'primary'} fontColor={'white'} size={'sm'} />
                  </Link>
                ) : (
                  <>
                    <Button
                      name={'리뷰보기'}
                      color={'gray300'}
                      fontColor={'white'}
                      size={'sm'}
                      onClick={e => toggleModal(e, idx)}
                    />
                    {openModal && (
                      <Alert
                        title={'내가 작성한 리뷰'}
                        content={reservation.review}
                        score={reservation.score}
                        onclose={e => toggleModal(e, idx)}
                      />
                    )}
                  </>
                )}
              </Layout.myPageItem>
            ))}
          </Layout.listWrapper>
        </Layout.SectionRight>
      </Layout.PageContent>
    </>
  );
};

export default ReservationPage;
