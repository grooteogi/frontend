import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import reservationList from '../../components/mypage/apply.mock.json';
import { nanoid } from 'nanoid';
import Content from '@components/mypage/Content';

const ReservationPage = () => {
  return (
    <Content title={'신청한 약속'}>
      <Layout.listWrapper>
        {reservationList.map(reservation => (
          <Layout.myPageItem key={nanoid()}>
            <MyPageCard reservation={reservation} cardType={'apply'} />
          </Layout.myPageItem>
        ))}
      </Layout.listWrapper>
    </Content>
  );
};

export default ReservationPage;
