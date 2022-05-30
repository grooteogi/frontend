import React from 'react';
import { Styled } from './MyPageCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Image from '../../common/Image';
import Hashtag from '../../common/Hashtag';
import { nanoid } from 'nanoid';
import { ReservationListResponseDto } from 'types/response';

const MyPageCard: React.FC<{ reservation: ReservationListResponseDto }> = ({ reservation }) => {
  const reservationDate = new Date(reservation.date);
  const todayDate = new Date();
  const remainDate = Math.floor((reservationDate.getTime() - todayDate.getTime()) / (1000 * 3600 * 24));

  return (
    <Styled.container>
      <Styled.image>
        <Image src={reservation.imageUrl} alt={'약속 사진'} size={'md'} />
      </Styled.image>
      <Styled.title>
        <Title size={'h3'} color={'black'} align={'right'}>
          {reservation.title}
        </Title>
      </Styled.title>
      <Styled.hash>
        {reservation.hashtags.map(hash => (
          <Hashtag key={nanoid()} hashtag={hash} />
        ))}
      </Styled.hash>
      <Styled.detail>
        <Typography size={'xxs'} color={'gray700'}>
          {reservation.date} {reservation.startTime} ~ {reservation.endTime}
        </Typography>
      </Styled.detail>
      <Styled.detail>
        <Typography size={'xxs'} color={'gray700'}>
          {reservation.place}
        </Typography>
      </Styled.detail>
      <Styled.detail>
        {remainDate > 0 ? (
          <Typography size={'xxs'} color={'danger'}>
            {`${remainDate}일 전`}
          </Typography>
        ) : (
          <Typography size={'xxs'} color={'darkgray'}>
            {`${-1 * remainDate}일 후`}
          </Typography>
        )}
      </Styled.detail>
    </Styled.container>
  );
};

export default MyPageCard;
