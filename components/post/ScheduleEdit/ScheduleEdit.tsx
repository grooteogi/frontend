import Typography from '@components/common/Typography';
import React, { useState, useCallback } from 'react';
import Styled from './ScheduleEdit.style';
import Dropdown from '@components/common/Dropdown';
import { ScheduleEntity } from 'types/entity';
import { RegionList, CreditType } from 'types/enum';
import { useFormik, useFormikContext } from 'formik';
import { enumToArray } from '@lib/common';
import { nanoid } from 'nanoid';
import Title from '@components/common/Title';
import Button from '@components/common/Button';
import ScheduleItem from '@components/common/ScheduleItem';
import { PostCreateRequestDto } from 'types/request';
import moment from 'moment';
import { validSchedule } from '@lib/validator';

export interface CreateScheduleProps {
  schedules?: Omit<ScheduleEntity, 'scheduleId'>[];
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
            startTime={moment(startTime, 'HH:mm:ss').format('HH:mm')}
            endTime={moment(endTime, 'HH:mm:ss').format('HH:mm')}
            region={region}
            place={place}
            scheduleId={''}
          />
        </Styled.itemBox>
      ))}
    </Styled.scroll>
  );
};

interface ScheduleCreateFormProps {
  onCreateSchedule: (newSchedule: Omit<ScheduleEntity, 'scheduleId'>) => void;
  schedules: Omit<ScheduleEntity, 'scheduleId'>[];
}

const ScheduleCreateForm: React.FC<ScheduleCreateFormProps> = ({ onCreateSchedule, schedules }) => {
  const [regionInput, setRegionInput] = useState(enumToArray(RegionList)[0]);
  const scheduleFormik = useFormik({
    initialValues: {
      place: '',
      date: '',
      startTime: '',
      endTime: '',
    },
    onSubmit: (values, actions) => {
      const newSchedule = {
        region: regionInput,
        ...values,
      };
      if (validSchedule(schedules, newSchedule)) {
        onCreateSchedule(newSchedule);
        actions.resetForm();
      } else {
        alert('약속시간이 중복됩니다.');
      }
    },
  });

  return (
    <form onSubmit={scheduleFormik.handleSubmit}>
      <Styled.innerContainer>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            지역
          </Typography>
          <Dropdown value={regionInput} list={enumToArray(RegionList)} zIndex={3} onClick={setRegionInput} />
        </Styled.row>
        <Styled.row>
          <Typography size={'sm'} color={'black'}>
            장소
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
            날짜
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
            시작시간
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
            종료시간
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
  const { setFieldValue, values } = useFormikContext<PostCreateRequestDto>();
  const { creditType, schedules } = values;

  const handleSetCreditType = (newCreditType: string) => {
    setFieldValue('creditType', newCreditType);
  };
  const handleCreateSchedule = (newSchedule: Omit<ScheduleEntity, 'scheduleId'>) => {
    setFieldValue('schedules', [...values.schedules, newSchedule]);
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
        <Dropdown zIndex={2} list={Object.values(CreditType)} value={creditType} onClick={handleSetCreditType} />
      </Styled.row>
      <ScheduleItems schedules={schedules} />
      <Title size={'h3'} color={'deepdarkgray'}>
        약속추가
      </Title>
      <ScheduleCreateForm schedules={schedules} onCreateSchedule={handleCreateSchedule} />
    </Styled.container>
  );
};

export default ScheduleEdit;
