import Wrapper from '@components/common/Wrapper';
import React, { useCallback, useState } from 'react';
import Styled from './ScheduleShow.style';
import { ScheduleEntity } from 'types/entity';
import ScheduleItem from '@components/common/ScheduleItem';

export interface ScheduleProps {
  schedules: ScheduleEntity[] | undefined;
}

const ScheduleItems: React.FC<ScheduleProps> = ({ schedules }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(64);
  const callbackRef = useCallback(node => {
    if (node !== null) {
      setScrollHeight(node.getBoundingClientRect().height);
    }
  }, []);

  if (schedules === undefined) return <div>schedules</div>;
  return (
    <Styled.scroll standardHeight={scrollHeight * 3}>
      {schedules?.map(({ scheduleId, date, startTime, endTime, region, place }: ScheduleEntity) => (
        <Styled.itemBox ref={callbackRef} key={scheduleId}>
          <ScheduleItem
            scheduleId={scheduleId}
            date={date}
            startTime={startTime}
            endTime={endTime}
            region={region}
            place={place}
          />
        </Styled.itemBox>
      ))}
    </Styled.scroll>
  );
};

const ShowSchedule: React.FC<ScheduleProps> = ({ schedules }) => {
  return (
    <Styled.container>
      <Wrapper flexDirection={'row'} margin={{ margin: '0 0 20px 0' }}>
        <Styled.title weight={'bold'} size={'md'} color={'black'}>
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
