import Typography from '@components/common/Typography';
import React, { useState, useCallback } from 'react';
import Styled from './ScheduleEdit.style';
import Dropdown from '@components/common/Dropdown';
import { ScheduleEntity } from 'types/entity';
import { RegionList, CreditTypeKR } from 'types/enum';
import { usePostContext } from '../context';
import { useFormik } from 'formik';
import { enumToArray } from '@lib/common';
import { nanoid } from 'nanoid';
import Title from '@components/common/Title';
import Button from '@components/common/Button';
import ScheduleItem from '@components/common/ScheduleItem';

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
      {schedules?.map(({ date, startTime, endTime, region, place }: Omit<ScheduleEntity, 'scheduleId'>) => (
        <Styled.itemBox ref={callbackRef} key={nanoid()}>
          <ScheduleItem
            date={date}
            startTime={startTime}
            endTime={endTime}
            region={region}
            place={place}
            scheduleId={''}
          />
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
      date: '',
      startTime: '',
      endTime: '',
    },
    onSubmit: values => {
      const newSchedule = {
        scheduleId: nanoid(),
        region: regionInput,
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
            약속지역
          </Typography>
          <Dropdown value={regionInput} list={enumToArray(RegionList)} zIndex={3} onClick={setRegionInput} />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속장소
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
            약속날짜
          </Typography>
          <Styled.input
            id={'date'}
            name={'date'}
            type={'date'}
            onChange={scheduleFormik.handleChange}
            value={scheduleFormik.values.date}
          />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속시작
          </Typography>
          <Styled.input
            id={'startTime'}
            name={'startTime'}
            type={'time'}
            onChange={scheduleFormik.handleChange}
            value={scheduleFormik.values.startTime}
          />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            약속종료
          </Typography>
          <Styled.input
            id={'endTime'}
            name={'endTime'}
            type={'time'}
            onChange={scheduleFormik.handleChange}
            value={scheduleFormik.values.endTime}
          />
        </Styled.row>
        <Styled.row>
          <Button type={'submit'} name={'약속추가'} color={'black'} fontColor={'white'} size={'lg'} />
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
      <Title size={'h2'} color={'black'}>
        약속일정
      </Title>
      <Styled.row>
        <Title size={'h3'} color={'deepdarkgray'}>
          결제방식
        </Title>
        <Dropdown zIndex={2} list={enumToArray(CreditTypeKR)} value={creditTypeInput} onClick={setCreditTypeFunc} />
      </Styled.row>
      <ScheduleItems schedules={schedules} />
      <Title size={'h3'} color={'deepdarkgray'}>
        약속추가
      </Title>
      <ScheduleCreateForm onCreateSchedule={handleCreateSchedule} />
    </Styled.container>
  );
};

export default ScheduleEdit;
