import moment from 'moment';
import { HashtagEntity } from 'types/entity';

type DateType = Date | string | number;
const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export const dateFormater = (format: string, date: DateType = Date.now()): string => {
  const mo = moment(date);
  const day: string = WEEKDAY[mo.day()];
  return mo.format(format.replace('w', day));
};

export const hashtagIdAdd = (hashtags: string[]) => {
  let idx = 0;
  const hashtagsWithId: HashtagEntity[] = hashtags.map(hVal => {
    const rObj: HashtagEntity = {
      hashtagId: idx++,
      name: hVal,
    };
    return rObj;
  });
  return hashtagsWithId;
};

// Helper
export const stringIsNumber = (value: any) => isNaN(Number(value)) === false;

// Turn enum into array
export function enumToArray(enumme: any) {
  return Object.keys(enumme)
    .filter(stringIsNumber)
    .map(key => enumme[key]);
}
