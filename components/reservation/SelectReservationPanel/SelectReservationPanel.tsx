import Title from '@components/common/Title';
import Styled from './SelectReservationPanel.styled';
import { ScheduleEntity } from 'types/entity';
import ScheduleItem from '@components/common/ScheduleItem';
import React, { useEffect } from 'react';
import { useReservationContext } from '../context';

const SelectReservationItem: React.FC<
  ScheduleEntity & { radioGroupName: string; style?: React.CSSProperties } & React.InputHTMLAttributes<HTMLInputElement>
> = props => {
  const { scheduleId, date, startTime, endTime, region, place, radioGroupName, style, ...rest } = props;

  return (
    <Styled.itemBox style={style ? style : {}}>
      <Styled.radioSpan>
        <input type={'radio'} name={radioGroupName} value={region} {...rest} />
      </Styled.radioSpan>
      <ScheduleItem
        date={date}
        startTime={startTime}
        endTime={endTime}
        place={place}
        region={region}
        scheduleId={scheduleId}
      />
    </Styled.itemBox>
  );
};

const SelectReservationPanel = ({ schedules }: { schedules: ScheduleEntity[] }) => {
  const { scheduleId, setScheduleId } = useReservationContext();

  useEffect(() => {
    if (schedules && scheduleId === 0) {
      setScheduleId(schedules[0].scheduleId);
    }
  }, [scheduleId, schedules, setScheduleId]);

  return (
    <Styled.container>
      <Title size={'h2'} color={'black'}>
        약속 일정 선택하기
      </Title>
      <form>
        <Styled.scroll role={'group'}>
          {schedules?.map(item => {
            return (
              <SelectReservationItem
                key={item.scheduleId}
                {...item}
                checked={scheduleId === item.scheduleId}
                onChange={() => setScheduleId(item.scheduleId)}
                radioGroupName={'reservation'}
              />
            );
          })}
        </Styled.scroll>
      </form>
    </Styled.container>
  );
};

export default SelectReservationPanel;
