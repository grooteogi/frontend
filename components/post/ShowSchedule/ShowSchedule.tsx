import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useCallback, useState } from 'react';
import Styled from './ShowSchedule.style';
import moment from 'moment';

type DateType = Date | string | number;
const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
const dateFormater = (format: string, date: DateType = Date.now()): string => {
  const mo = moment(date);
  const day: string = WEEKDAY[mo.day()];
  return mo.format(format.replace('w', day));
};

export type Item = {
  id: string | number;
  startTime: string;
  endTime: string;
  location: string;
  place: string;
};

export interface ShowScheduleProps {
  payMethod?: string;
  itemList?: Item[];
}

const ScheduleItems: React.FC<ShowScheduleProps> = ({ itemList }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(64);
  const callbackRef = useCallback(node => {
    if (node !== null) {
      setScrollHeight(node.getBoundingClientRect().height);
      console.log(scrollHeight);
    }
  }, []);

  return (
    <Styled.scroll standardHeight={scrollHeight * 3}>
      {itemList?.map(({ id, startTime, endTime, location, place }: Item) => (
        <Styled.itemBox ref={callbackRef} key={id}>
          <Wrapper flexDirection={'row'} justifyContent={'space-between'}>
            <Typography size={'sm'} color={'black'} weight={'MEDIUM'}>
              {dateFormater('MM월 DD일 (w)', startTime)} {dateFormater('HH:mm', startTime)}~
              {dateFormater('HH:mm', endTime)}
            </Typography>
            <Typography size={'sm'} color={'black'} weight={'MEDIUM'}>
              {location}
            </Typography>
          </Wrapper>
          <Wrapper flexDirection={'column'}>
            <Typography size={'xs'} color={'black'}>
              {place}
            </Typography>
          </Wrapper>
          <Styled.hr />
        </Styled.itemBox>
      ))}
    </Styled.scroll>
  );
};

const MeetingSchedule: React.FC<ShowScheduleProps> = ({ payMethod = '만나서 결제', ...itemList }) => {
  return (
    <Styled.container>
      <Wrapper flexDirection={'row'} margin={{ margin: '0 0 20px 0' }}>
        <Styled.title weight="BOLD" size={'md'} color={'black'}>
          약속 일정
        </Styled.title>
      </Wrapper>
      <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
        <ScheduleItems {...itemList} />
      </Wrapper>
      <Styled.bottom>
        <Typography size={'md'} color={'black'} weight={'BOLD'}>
          {payMethod}
        </Typography>
      </Styled.bottom>
    </Styled.container>
  );
};

export default MeetingSchedule;
