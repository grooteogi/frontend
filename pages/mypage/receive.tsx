import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import SideBar from '../../components/mypage/SideBar/SideBar';
import reservationList from '../../components/mypage/receive.mock.json';
import { nanoid } from 'nanoid';
import Button from '@components/common/Button';

const ReservationPage = () => {
  const now = new Date();
  return (
    <>
      <Layout.PageContent>
        <Layout.SectionLeft>
          <SideBar />
        </Layout.SectionLeft>
        <Layout.SectionRight>
          <Layout.PageTitle>
            <Title size={'h1'} color={'black'}>
              신청받은 약속
            </Title>
          </Layout.PageTitle>
          <Layout.listWrapper>
            {reservationList.map(reservation => (
              <Layout.myPageItem key={nanoid()}>
                <MyPageCard key={nanoid()} reservation={reservation} />
                <Button
                  name={'약속 메시지 확인하기'}
                  color={'primary'}
                  fontColor={'white'}
                  size={'sm'}
                  style={{ width: 'fit-content', padding: '0 0.3rem' }}
                />
              </Layout.myPageItem>
            ))}
          </Layout.listWrapper>
        </Layout.SectionRight>
      </Layout.PageContent>
    </>
  );
};

export default ReservationPage;
