import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useState, useCallback } from 'react';
import Styled from './ScheduleEdit.style';
import Dropdown from '@components/common/Dropdown';
import { dateFormater, enumToArray } from '@lib/common';
import { ScheduleEntity } from 'types/entity';
import { RegionList, CreditTypeKR } from 'types/enum';
import { usePostContext } from '../context';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';

export interface CreateScheduleProps {
  schedules?: ScheduleEntity[];
}

const ScheduleItems: React.FC<CreateScheduleProps> = ({ schedules }) => {
  const [scrollHeight, setScrollHeight] = useState<number>(64);
  const callbackRef = useCallback(node => {
    if (node !== null) setScrollHeight(node.getBoundingClientRect().height);
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

const ScheduleCreateForm: React.FC<{ onCreateSchedule: (newSchedule: ScheduleEntity) => void }> = ({
  onCreateSchedule,
}) => {
  const [regionInput, setRegionInput] = useState(enumToArray(RegionList)[0]);
  const scheduleFormik = useFormik({
    initialValues: {
      place: '',
      startTime: '',
      endTime: '',
    },
    onSubmit: values => {
      const newSchedule = {
        scheduleId: nanoid(),
        region: regionInput,
        date: new Date(values.startTime).toString(), // TODO: backend date format 확인할것
        ...values,
      };
      onCreateSchedule(newSchedule);
    },
  });

  return (
    <form onSubmit={scheduleFormik.handleSubmit}>
      <Styled.innerContainer>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속 지역
          </Typography>
          <Dropdown value={regionInput} list={enumToArray(RegionList)} zIndex={3} onClick={setRegionInput} />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속 장소
          </Typography>
          <Styled.input
            id={'place'}
            name={'place'}
            type={'search'}
            onChange={scheduleFormik.handleChange}
            value={scheduleFormik.values.place}
          />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속 시작
          </Typography>
          <Styled.input
            id={'startTime'}
            name={'startTime'}
            type={'datetime-local'}
            onChange={scheduleFormik.handleChange}
            value={scheduleFormik.values.startTime}
          />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속 종료
          </Typography>
          <Styled.input
            id={'endTime'}
            name={'endTime'}
            type={'datetime-local'}
            onChange={scheduleFormik.handleChange}
            value={scheduleFormik.values.endTime}
          />
        </Styled.row>
        <Styled.row>
          <Styled.submitBtn type={'submit'} name="추가하기" color={'primary'} fontColor={'white'} size={'lg'} />
        </Styled.row>
      </Styled.innerContainer>
    </form>
  );
};

const ScheduleEdit: React.FC = () => {
  const [creditTypeInput, setCreditTypeInput] = useState(enumToArray(CreditTypeKR)[0]);
  const { schedules, setSchedules, creditType, setCreditType } = usePostContext();

  const setCreditTypeFunc = (element: string) => {
    setCreditTypeInput(element);
    setCreditType(element);
  };

  const handleCreateSchedule = (newSchedule: ScheduleEntity) => {
    setSchedules([...schedules, newSchedule]);
  };

  return (
    <Styled.container>
      <Styled.title weight="BOLD" size={'md'} color={'black'}>
        약속 일정
      </Styled.title>
      <Styled.row>
        <Typography size={'md'} color={'black'} weight={'BOLD'}>
          결제 방식
        </Typography>
        <Dropdown zIndex={2} list={enumToArray(CreditTypeKR)} value={creditTypeInput} onClick={setCreditTypeFunc} />
      </Styled.row>
      <ScheduleItems schedules={schedules} />
      <Typography size={'md'} color={'black'} weight={'BOLD'}>
        약속 추가
      </Typography>
      <ScheduleCreateForm onCreateSchedule={handleCreateSchedule} />
    </Styled.container>
  );
};

export default ScheduleEdit;
