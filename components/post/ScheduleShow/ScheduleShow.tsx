import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useCallback, useState } from 'react';
import Styled from './ScheduleShow.style';
import { dateFormater } from '@lib/common';
import { ScheduleEntity } from 'types/entity';
import { ScheduleType } from 'types/postDetail';

const ScheduleItems: React.FC<ScheduleType> = ({ schedules }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(64);
  const callbackRef = useCallback(node => {
    if (node !== null) {
      setScrollHeight(node.getBoundingClientRect().height);
      console.log(scrollHeight);
    }
  }, []);

  return (
    <Styled.scroll standardHeight={scrollHeight * 3}>
      {schedules?.map(({ scheduleId, date, startTime, endTime, region, place }: ScheduleEntity) => (
        <Styled.itemBox ref={callbackRef} key={scheduleId}>
          <Wrapper flexDirection={'row'} justifyContent={'space-between'}>
            <Typography size={'sm'} color={'black'} weight={'MEDIUM'}>
              {dateFormater('MM월 DD일 (w)', date)} {dateFormater('HH:mm', date + ` ` + startTime)}~
              {dateFormater('HH:mm', date + ' ' + endTime)}
            </Typography>
            <Typography size={'sm'} color={'black'} weight={'MEDIUM'}>
              {region}
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

const ShowSchedule: React.FC<ScheduleType> = ({ schedules }) => {
  return (
    <Styled.container>
      <Wrapper flexDirection={'row'} margin={{ margin: '0 0 20px 0' }}>
        <Styled.title weight={'BOLD'} size={'md'} color={'black'}>
          약속 일정
        </Styled.title>
      </Wrapper>
      <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
        <ScheduleItems schedules={schedules} />
      </Wrapper>
    </Styled.container>
  );
};

export default ShowSchedule;
