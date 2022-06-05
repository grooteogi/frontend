import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import { nanoid } from 'nanoid';
import Content from '@components/mypage/Content';
import useReservationList from '@components/mypage/useReservationList';
import SortingTab from '@components/common/SortingTab';
import { FilterType } from 'types/enum';
import { useState } from 'react';

export function getFilterTypeKeyByValue(value: string) {
  const index = Object.values(FilterType).indexOf(value as unknown as FilterType);
  const key = Object.keys(FilterType)[index];
  return key as keyof typeof FilterType;
}

const ReservationPage = () => {
  const isHost = true;
  const [filter, setFilter] = useState(FilterType.ALL);
  console.log('all', FilterType.ALL);
  const { isLoading, reservationList, error } = useReservationList(isHost, getFilterTypeKeyByValue(filter));

  if (isLoading) <div>loading</div>;
  if (error) <div>error</div>;
  if (!reservationList) <div>no data</div>;
  return (
    <Content title={'신청한 약속'}>
      <SortingTab itemList={Object.values(FilterType)} value={filter} onClick={setFilter} />
      <Layout.listWrapper>
        {reservationList?.map(reservation => (
          <Layout.myPageItem key={nanoid()}>
            <MyPageCard reservation={reservation} cardType={'apply'} />
          </Layout.myPageItem>
        ))}
      </Layout.listWrapper>
    </Content>
  );
};

export default ReservationPage;
