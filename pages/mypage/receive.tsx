import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import { nanoid } from 'nanoid';
import Content from '@components/mypage/Content';
import { useState } from 'react';
import { FilterType } from 'types/enum';
import useReservationList from '@components/mypage/useReservationList';
import { getFilterTypeKeyByValue } from './apply';
import SortingTab from '@components/common/SortingTab';
import { useRouter } from 'next/router';

const ReservationPage = () => {
  const router = useRouter();
  const isHost = false;
  const [filter, setFilter] = useState(FilterType.ALL);
  console.log('all', FilterType.ALL);
  const { isLoading, reservationList, error } = useReservationList(isHost, getFilterTypeKeyByValue(filter));

  if (isLoading) <div>loading</div>;
  if (error) <div>error</div>;
  if (!reservationList) <div>no data</div>;
  return (
    <Content title={'신청받은 약속'}>
      <SortingTab itemList={Object.values(FilterType)} value={filter} onClick={setFilter} />
      <Layout.listWrapper>
        {reservationList?.map(reservation => (
          <Layout.myPageItem key={nanoid()} onClick={() => router.push(`/post/${reservation.postId}`)}>
            <MyPageCard reservation={reservation} cardType={'receive'} />
          </Layout.myPageItem>
        ))}
      </Layout.listWrapper>
    </Content>
  );
};

export default ReservationPage;
