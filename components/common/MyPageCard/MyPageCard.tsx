import React from 'react';
import { Styled } from './MyPageCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import { ReservationEntity } from 'types/entity';
import Image from '../Image';
import Hashtag from '../Hashtag';
import { nanoid } from 'nanoid';

interface MyPageCardProps {
  reservationEntity: ReservationEntity;
}

const MyPageCard: React.FC<MyPageCardProps> = ({ reservationEntity }) => {
  return (
    <Styled.container>
      <Styled.image>
        <Image src={'imgs/SamplePost.jpeg'} alt={'card img not found'} size={'md'} />
      </Styled.image>
      <Styled.title>
        <Title size={'h3'} color={'black'} align={'right'}>
          {'저랑 밥 먹으면서 진로 이야기 해요~'}
        </Title>
      </Styled.title>
      <Styled.hash>
        {['코딩테스트', '개발자취업', 'PEET'].map(hash => (
          <Hashtag key={nanoid()} hashtag={hash} />
        ))}
      </Styled.hash>
      <Styled.detail>
        <Typography size={'xxs'} color={'gray700'}>
          {reservationEntity.date} {reservationEntity.startTime} ~ {reservationEntity.endTime}
        </Typography>
      </Styled.detail>
      <Styled.detail>
        <Typography size={'xxs'} color={'gray700'}>
          {reservationEntity.place}
        </Typography>
      </Styled.detail>
      <Styled.detail>
        <Typography size={'xxs'} color={'danger'}>
          {'하루 전'}
        </Typography>
      </Styled.detail>
    </Styled.container>
  );
};

export default MyPageCard;
