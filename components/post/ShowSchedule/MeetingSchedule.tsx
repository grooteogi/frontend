import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Styled from './MeetingSchedule.style';
import Dropdown from '@components/common/Dropdown';
import { dateFormater } from '@lib/common';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type MeetingScheduleProps = XOR<ShowScheduleProps, SelectScheduleProps>;

export type Item = {
  id: string | number;
  startTime: string;
  endTime: string;
  location: string;
  place: string;
};
const loactionList = [
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
export interface ShowScheduleProps {
  payMethod?: string;
  itemList?: Item[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectScheduleProps {}

const ScheduleItems: React.FC<Pick<MeetingScheduleProps, 'itemList'>> = ({ itemList }) => {
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

const MeetingSchedule: React.FC<MeetingScheduleProps> = ({ payMethod = '만나서 결제', ...itemList }) => {
  const [list, setList] = useState(itemList.itemList);
  return (
    <Styled.container>
      <Wrapper flexDirection={'row'} margin={{ margin: '0 0 20px 0' }}>
        <Styled.title weight="BOLD" size={'md'} color={'black'}>
          약속 일정
        </Styled.title>
      </Wrapper>
      {list !== undefined ? (
        <>
          <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
            <ScheduleItems {...itemList} />
          </Wrapper>
          <Styled.bottom>
            <Typography size={'md'} color={'black'} weight={'BOLD'}>
              {payMethod}
            </Typography>
          </Styled.bottom>
        </>
      ) : (
        <>
          <Styled.row>
            <Typography size={'md'} color={'black'}>
              결제 방식
            </Typography>
            <Dropdown defaultString={payMethodList[0]} list={payMethodList} />
          </Styled.row>
          <Styled.row>
            <Typography size={'md'} color={'black'}>
              지역구
            </Typography>
            <Dropdown defaultString={loactionList[0]} list={loactionList} />
          </Styled.row>
          <Wrapper flexDirection={'column'}>
            <Typography size={'md'} color={'black'}>
              약속 추가
            </Typography>
          </Wrapper>
          <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
            <ScheduleItems itemList={list} />
          </Wrapper>
        </>
      )}
    </Styled.container>
  );
};

export default MeetingSchedule;
