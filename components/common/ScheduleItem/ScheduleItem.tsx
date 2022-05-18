import Typography from '@components/common/Typography';
import { dateFormater } from '@lib/common';
import moment from 'moment';
import 'moment/locale/ko';
import { ScheduleEntity } from 'types/entity';
import Styled from './ScheduleItem.styled';

// const formatDate = (date: string) => {};

const ScheduleItem: React.FC<ScheduleEntity> = ({ date, startTime, endTime, place, region }) => {
  return (
    <Styled.container>
      <Styled.detailContainer>
        <Typography size={'sm'} color={'black'}>
          {moment(date, 'YYYY-MM-DD').locale('ko').format('MM월 DD일 (ddd)').toString()} {startTime}~{endTime}
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
