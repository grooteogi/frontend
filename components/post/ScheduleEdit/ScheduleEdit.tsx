import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Styled from './ScheduleEdit.style';
import Dropdown from '@components/common/Dropdown';
import { dateFormater } from '@lib/common';
import { ScheduleEntity } from 'types/entity';
import { RegionList, CreditTypeKR } from 'types/enum';

export interface CreateScheduleProps {
  schedules?: ScheduleEntity[];
}

const ScheduleItems: React.FC<CreateScheduleProps> = ({ schedules }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(64);
  const callbackRef = useCallback(node => {
    if (node !== null) {
      setScrollHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return (
    <Styled.scroll standardHeight={scrollHeight * 3}>
      {schedules?.map(({ scheduleId, date, startTime, endTime, region, place }: ScheduleEntity) => (
        <Styled.itemBox ref={callbackRef} key={scheduleId}>
          <Wrapper flexDirection={'row'} justifyContent={'space-between'}>
            <Typography size={'sm'} color={'black'} weight={'MEDIUM'}>
              {dateFormater('MM월 DD일 (w)', date)} {dateFormater('HH:mm', startTime)}~{dateFormater('HH:mm', endTime)}
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
// Helper
const StringIsNumber = (value: any) => isNaN(Number(value)) === false;

// Turn enum into array
function ToArray(enumme: any) {
  return Object.keys(enumme)
    .filter(StringIsNumber)
    .map(key => enumme[key]);
}

const ScheduleEdit: React.FC = () => {
  const initStart = new Date();
  const initEnd = new Date().setHours(initStart.getHours() + 2);

  const [creditTypeInput, setCreditTypeInput] = useState(ToArray(CreditTypeKR)[0]);
  const [regionInput, setRegionInput] = useState(ToArray(RegionList)[0]);
  const [schedules, setSchedules] = useState<ScheduleEntity[]>([]);

  const startTimeRef = useRef<any>();
  const endTimeRef = useRef<any>();
  const placeRef = useRef<any>();

  let idx = 0;
  const addSchedule = () => {
    console.log(startTimeRef.current.value);
    const newSchedule: ScheduleEntity = {
      scheduleId: idx,
      region: regionInput,
      place: placeRef.current.value,
      date: startTimeRef.current.value,
      startTime: startTimeRef.current.value,
      endTime: endTimeRef.current.value,
    };
    idx++;
    const newScheduleArray: ScheduleEntity[] = [...schedules, newSchedule];
    setSchedules(newScheduleArray);
    console.log(newSchedule);
    console.log(schedules);
  };

  return (
    <form onSubmit={addSchedule}>
      <Styled.container>
        <Wrapper flexDirection={'row'} margin={{ margin: '0 0 20px 0' }}>
          <Styled.title weight="BOLD" size={'md'} color={'black'}>
            약속 일정
          </Styled.title>
        </Wrapper>
        <Styled.row>
          <Typography size={'md'} color={'black'} weight={'BOLD'}>
            결제 방식
          </Typography>
          <Dropdown zIndex={2} list={ToArray(CreditTypeKR)} value={creditTypeInput} onClick={setCreditTypeInput} />
        </Styled.row>
        <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
          <ScheduleItems schedules={schedules} />
        </Wrapper>
        <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
          <Typography size={'md'} color={'black'} weight={'BOLD'}>
            약속 추가
          </Typography>
          <Styled.innerContainer>
            <Styled.row>
              <Typography size={'sm'} color={'black'}>
                약속 지역
              </Typography>
              <Dropdown value={regionInput} list={ToArray(RegionList)} zIndex={3} onClick={setRegionInput} />
            </Styled.row>
            <Styled.row>
              <Typography size={'sm'} color={'black'}>
                약속 장소
              </Typography>
              <Styled.input ref={placeRef} defaultValue={''} name={'placeInput'} type={'search'} />
            </Styled.row>
            <Styled.row>
              <Typography size={'sm'} color={'black'}>
                약속 시작
              </Typography>
              <Styled.input
                ref={startTimeRef}
                defaultValue={dateFormater('YYYY-MM-DDThh:mm', initStart)}
                name={'startTimeInput'}
                type={'datetime-local'}
              />
            </Styled.row>
            <Styled.row>
              <Typography size={'sm'} color={'black'}>
                약속 종료
              </Typography>
              <Styled.input
                ref={endTimeRef}
                defaultValue={dateFormater('YYYY-MM-DDThh:mm', initEnd)}
                name={'endTimeInput'}
                type={'datetime-local'}
              />
            </Styled.row>
            <Styled.row>
              <Styled.submitBtn
                name="추가하기"
                color={'primary'}
                fontColor={'white'}
                size={'lg'}
                type={'button'}
                onClick={() => addSchedule()}
              />
            </Styled.row>
          </Styled.innerContainer>
        </Wrapper>
      </Styled.container>
    </form>
  );
};

export default ScheduleEdit;
