import React, { useState } from 'react';
import { Styled } from './MyPageCard.styled';
import Title from '@components/common/Title';
import Typography from '@components/common/Typography';
import Image from '../../common/Image';
import Hashtag from '../../common/Hashtag';
import { ReservationListResponseDto } from 'types/response';
import Button from '@components/common/Button';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import Alert from '@components/mypage/Alert';
import Router from 'next/router';

const MyPageCard: React.FC<{ reservation: ReservationListResponseDto; cardType?: 'apply' | 'receive' }> = ({
  reservation,
  cardType,
}) => {
  const reservationDate = new Date(reservation.date);
  const todayDate = new Date();
  const remainDate = Math.floor((reservationDate.getTime() - todayDate.getTime()) / (1000 * 3600 * 24));
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOnCloseModal = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.preventDefault();
    setModalOpen(false);
    e?.stopPropagation();
  };
  const moveToCreateReview = (e: React.MouseEvent) => {
    e.preventDefault();
    Router.push('/mypage/reviews/create');
    e.stopPropagation();
  };
  const cancelReservation = () => {
    console.log('취소하기 로직 고');
  };
  return (
    <Styled.container>
      <Styled.image>
        <Image
          src={reservation.imageUrl === '' || reservation.imageUrl ? '/imgs/default_profile.png' : reservation.imageUrl}
          alt={'약속 사진'}
          size={'md'}
        />
      </Styled.image>
      <Styled.info>
        <Styled.title>
          <Title size={'h3'} color={'black'} align={'left'}>
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
        <Styled.spaceBetween>
          {remainDate > 0 ? (
            <Typography size={'xxs'} color={'danger'}>
              {`${remainDate}일 전`}
            </Typography>
          ) : (
            <Typography size={'xxs'} color={'darkgray'}>
              {`${-1 * remainDate}일 후`}
            </Typography>
          )}
          {cardType === undefined ? null : cardType === 'receive' ? (
            <>
              <Button
                name={'메시지 확인'}
                color={'primary'}
                fontColor={'white'}
                size={'sm'}
                style={{ width: 'fit-content', padding: '0 0.5rem' }}
                onClick={e => {
                  e.preventDefault();
                  setModalOpen(true);
                  e.stopPropagation();
                }}
              />
              <Alert
                title={reservation.applyNickname}
                content={reservation.text}
                phoneNum={reservation.applyPhone}
                isOpen={isModalOpen}
                onRequestClose={handleOnCloseModal}
              />
            </>
          ) : new Date(reservation.date + ' ' + reservation.startTime).getTime() > todayDate.getTime() ? (
            <Button name={'취소하기'} color={'gray300'} fontColor={'white'} size={'sm'} onClick={cancelReservation} />
          ) : reservation.score === 0 ? (
            <Button name={'리뷰쓰기'} color={'primary'} fontColor={'white'} size={'sm'} onClick={moveToCreateReview} />
          ) : (
            <>
              <Button
                name={'리뷰보기'}
                color={'gray300'}
                fontColor={'white'}
                size={'sm'}
                onClick={e => {
                  e.preventDefault();
                  setModalOpen(true);
                  e.stopPropagation();
                }}
              />
              <Alert
                title={'내가 작성한 리뷰'}
                score={reservation.score}
                content={reservation.review}
                isOpen={isModalOpen}
                onRequestClose={handleOnCloseModal}
              />
            </>
          )}
        </Styled.spaceBetween>
      </Styled.info>
    </Styled.container>
  );
};

export default MyPageCard;
