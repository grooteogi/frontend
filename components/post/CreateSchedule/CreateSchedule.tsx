import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useCallback, useState } from 'react';
import Styled from './CreateSchedule.style';
import Dropdown from '@components/common/Dropdown';
import { dateFormater } from '@lib/common';
import { ScheduleEntity } from 'types/entity';

const regionList = [
  '강서구',
  '구로구',
  '금천구',
  '관악구',
  '동작구',
  '영등포구',
  '양천구',
  '마포구',
  '서대문구',
  '서초구',
  '강남구',
  '송파구',
  '강동구',
  '은평구',
  '종로구',
  '중구',
  '용산구',
  '성동구',
  '동대문구',
  '중랑구',
  '광진구',
  '노원구',
  '성북구',
  '강북구',
  '도봉구',
];
const payMethodList = ['만나서 선택', '더치페이', '사줄게요', '사주세요'];

export interface CreateScheduleProps {
  schedules?: ScheduleEntity[];
}

const ScheduleItems: React.FC<CreateScheduleProps> = ({ schedules }) => {
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
              {dateFormater('MM월 DD일 (w)', date)} {dateFormater('HH:mm', date + ' ' + startTime)}~
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

const CreateSchedule: React.FC = () => {
  const [schedule, setSchedule] = useState([]);
  const today = dateFormater('YYYY-MM-DDThh:mm', new Date());
  const addSchedule = () => {
    alert('추가하기');
  };
  const onSTChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(`start Time : ${e.target.value}`);
  };
  const onETChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(`end Time : ${e.target.value}`);
  };
  return (
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
        <Dropdown defaultString={payMethodList[0]} list={payMethodList} />
      </Styled.row>
      <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
        <ScheduleItems schedules={schedule} />
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
            <Dropdown defaultString={regionList[0]} list={regionList} />
          </Styled.row>
          <Styled.row>
            <Typography size={'sm'} color={'black'}>
              약속 장소
            </Typography>
            <Styled.input type={'search'} />
          </Styled.row>
          <Styled.row>
            <Typography size={'sm'} color={'black'}>
              약속 시작
            </Typography>
            <Styled.input type={'datetime-local'} value={today} onChange={e => onSTChangeHandler(e)} />
          </Styled.row>
          <Styled.row>
            <Typography size={'sm'} color={'black'}>
              약속 종료
            </Typography>
            <Styled.input type={'datetime-local'} value={today} onChange={e => onETChangeHandler(e)} />
          </Styled.row>
          <Styled.row>
            <Styled.submitBtn
              name="추가하기"
              color={'primary'}
              fontColor={'white'}
              size={'lg'}
              onClick={() => addSchedule()}
            />
          </Styled.row>
        </Styled.innerContainer>
      </Wrapper>
    </Styled.container>
  );
};

export default CreateSchedule;
