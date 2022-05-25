import { ReservationCreateRequestDto } from '../../types/request';
import { ReservationEntity } from 'types/entity';
import client from './client';

const reservation = {
  createReservation: async (data: ReservationCreateRequestDto) => {
    const url = '/reservation';
    const status = await client.post(url, data);
    return status;
  },
  sendMessage: async (phoneNumber: string) => {
    const url = `/reservation/sms/send?phoneNumber=${phoneNumber}`;
    const status = await client.post(url, {});
    return status;
  },
  confirmMessage: async (data: { phoneNumber: string; code: string }) => {
    const url = '/reservation/sms/check';
    const status = await client.post(url, data);
    return status;
  },
  resendMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/send-sms';
    const status = await client.post(url, reservation);
    return status;
  },
};

export default reservation;
