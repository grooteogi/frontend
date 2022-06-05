import Typography from '@components/common/Typography';
import moment from 'moment';
import 'moment/locale/ko';
import { ScheduleEntity } from 'types/entity';
import Styled from './ScheduleItem.styled';
import React from 'react';

const ScheduleItem: React.FC<ScheduleEntity> = ({ date, startTime, endTime, place, region }) => {
  return (
    <Styled.container>
      <Styled.detailContainer>
        <Typography size={'sm'} color={'black'}>
          {moment(date, 'YYYY-MM-DD').locale('ko').format('MM월 DD일 (ddd)').toString()}{' '}
          {moment(date + ' ' + startTime, 'YYYY-MM-DD hh:mm:ss')
            .locale('ko')
            .format('hh:mm')
            .toString()}
          ~
          {moment(date + ' ' + endTime, 'YYYY-MM-DD hh:mm:ss')
            .locale('ko')
            .format('hh:mm')
            .toString()}
        </Typography>
        <Typography size={'xs'} color={'black'}>
          {place}
        </Typography>
      </Styled.detailContainer>
      <Styled.regionContainer>
        <Typography size={'sm'} color={'black'}>
          {region}
        </Typography>
      </Styled.regionContainer>
    </Styled.container>
  );
};

export default ScheduleItem;
