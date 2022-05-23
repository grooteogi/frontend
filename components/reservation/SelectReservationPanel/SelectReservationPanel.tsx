import Box from '@components/common/Box';
import Title from '@components/common/Title';
import Styled from './SelectReservationPanel.styled';
import { ScheduleEntity } from 'types/entity';
import ScheduleItem from '@components/common/ScheduleItem';
import { useEffect } from 'react';
import { useReservationContext } from '../context';

const SelectReservationItem: React.FC<
  ScheduleEntity & { radioGroupName: string; style?: React.CSSProperties } & React.InputHTMLAttributes<HTMLInputElement>
> = props => {
  const { scheduleId, date, startTime, endTime, region, place, radioGroupName, style, ...rest } = props;

  return (
    <Styled.itemContainer style={style ? style : {}}>
      <input type={'radio'} name={radioGroupName} value={region} {...rest} />
      <ScheduleItem
        date={date}
        startTime={startTime}
        endTime={endTime}
        place={place}
        region={region}
        scheduleId={scheduleId}
      />
    </Styled.itemContainer>
  );
};

const itemList = [
  {
    scheduleId: 1,
    date: '2020-01-01',
    startTime: '9:00',
    endTime: '11:45',
    region: '신촌',
    place: '신촌근처 아무 식당 (협의)',
  },
  {
    scheduleId: 2,
    date: '2020-01-01',
    startTime: '9:00',
    endTime: '11:45',
    region: '신촌',
    place: '신촌근처 아무 식당 (협의)',
  },
  {
    scheduleId: 3,
    date: '2020-01-01',
    startTime: '9:00',
    endTime: '11:45',
    region: '신촌',
    place: '신촌근처 아무 식당 (협의)',
  },
];

const SelectReservationPanel = () => {
  const { scheduleId, setScheduleId } = useReservationContext();

  useEffect(() => {
    if (scheduleId === 0) setScheduleId(itemList[0].scheduleId);
  }, [scheduleId, setScheduleId]);

  return (
    <Styled.container>
      <Title size={'h2'} color={'black'}>
        약속 일정 선택하기
      </Title>
      <Box width={411}>
        <form>
          <Styled.scrollContainer role={'group'}>
            {itemList.map((item, idx) => {
              if (idx === itemList.length - 1)
                return (
                  <SelectReservationItem
                    key={item.scheduleId}
                    {...item}
                    checked={scheduleId === item.scheduleId}
                    onChange={() => setScheduleId(item.scheduleId)}
                    radioGroupName={'reservation'}
                    style={{ border: 'none' }}
                  />
                );
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
          </Styled.scrollContainer>
        </form>
      </Box>
    </Styled.container>
  );
};

export default SelectReservationPanel;
