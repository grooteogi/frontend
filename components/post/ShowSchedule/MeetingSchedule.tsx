import Wrapper from '@components/common/Wrapper';
import Typography from '@components/common/Typography';
import React, { useState } from 'react';
import Styled from './MeetingSchedule.style';
import Dropdown from '@components/common/Dropdown';
import moment from 'moment';

type DateType = Date | string | number;
const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
const dateFormater = (format: string, date: DateType = Date.now()): string => {
  const mo = moment(date);
  const day: string = WEEKDAY[mo.day()];
  return mo.format(format.replace('w', day));
};

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
  liked?: boolean;
  itemList?: Item[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SelectScheduleProps {}

const ScheduleItems: React.FC<Pick<MeetingScheduleProps, 'itemList'>> = ({ itemList }) => {
  return (
    <>
      {itemList?.map(({ id, startTime, endTime, location, place }: Item) => (
        <Wrapper key={id} flexDirection={'column'} gap={{ gap: 10 }}>
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
        </Wrapper>
      ))}
    </>
  );
};

const MeetingSchedule: React.FC<MeetingScheduleProps> = ({
  payMethod = '만나서 결제',
  liked: iLiked = false,
  ...itemList
}) => {
  const [liked, setLiked] = useState<boolean>(iLiked);
  // add시 사용하려고 미리 훅만들어둠.
  const [list, setList] = useState(itemList.itemList);
  return (
    <Styled.container>
      <Wrapper flexDirection={'row'} margin={{ margin: '0 0 20px 0' }}>
        <Typography weight="BOLD" size={'lg'} color={'black'}>
          약속 일정
        </Typography>
      </Wrapper>
      {list !== undefined ? (
        <>
          <Wrapper flexDirection={'column'} margin={{ marginTop: '10px' }}>
            <ScheduleItems {...itemList} />
          </Wrapper>
          <Styled.row>
            <Styled.likedBtn
              onClick={() => {
                setLiked(!liked);
              }}
            >
              <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#FF8585">
                {liked ? (
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                ) : (
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                )}
              </svg>
            </Styled.likedBtn>
            <Typography size={'md'} color={'black'} weight={'BOLD'}>
              {payMethod}
            </Typography>
          </Styled.row>
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
            {/* TODO: add 관련 어떻게 받을지 구상해서 추가할 것. */}
          </Wrapper>
        </>
      )}
    </Styled.container>
  );
};

export default MeetingSchedule;
