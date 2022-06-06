import moment from 'moment';
import { ScheduleEntity } from 'types/entity';

const validEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) return true;
  else return false;
};

const validPassword = (password: string) => {
  const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?=\S+$).{8,}$/;
  if (password.match(regexPassword)) return true;
  else return false;
};

const validSchedule = (
  schedules: Omit<ScheduleEntity, 'scheduleId'>[],
  schedule: Omit<ScheduleEntity, 'scheduleId'>,
) => {
  const { date, startTime, endTime } = schedule;
  const start = moment(`${date} ${startTime}`, 'YYYY-MM-DD HH:mm:ss').valueOf();
  const end = moment(`${date} ${endTime}`, 'YYYY-MM-DD HH:mm:ss').valueOf();

  for (const s of schedules) {
    const startS = moment(`${s.date} ${s.startTime}`, 'YYYY-MM-DD HH:mm:ss').valueOf();
    const endS = moment(`${s.date} ${s.endTime}`, 'YYYY-MM-DD HH:mm:ss').valueOf();
    if (start >= startS && start <= endS) return false;
    if (end >= startS && end <= endS) return false;
  }
  return true;
};

const validEmptyData = (data: any, exception?: string[]) => {
  for (const key in data) {
    if (exception && exception.includes(key)) continue;
    if (typeof data[key] === 'object' && Object.keys(data[key]).length === 0) return true;
    else if (data[key] === '') return true;
  }
  return false;
};

export { validEmail, validPassword, validSchedule, validEmptyData };
