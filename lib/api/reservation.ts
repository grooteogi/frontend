import { FilterType } from './../../types/enum';
import { ReservationCreateRequestDto } from '../../types/request';
import { ReservationEntity } from 'types/entity';
import client from './client';

const reservation = {
  createReservation: async (data: ReservationCreateRequestDto) => {
    const url = '/reservation';
    return await client.post(url, data);
  },
  sendMessage: async (phoneNumber: string) => {
    const url = `/reservation/sms/send?phoneNumber=${phoneNumber}`;
    return await client.post(url, {});
  },
  confirmMessage: async (data: { phoneNumber: string; code: string }) => {
    const url = '/reservation/sms/check';
    return await client.post(url, data);
  },
  resendMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/send-sms';
    return await client.post(url, reservation);
  },
  getReservationList: async (isHost: boolean, filter: keyof typeof FilterType) => {
    const url = `/reservation?${isHost}=true&filter=${filter}`;
    return await client.get(url);
  },
};

export default reservation;
