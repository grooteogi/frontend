import { ReservationCreateRequestDto } from './../../types/api';
import { ReservationEntity } from 'types/entity';
import { postData } from './restApi';

const reservation = {
  createReservation: async (data: ReservationCreateRequestDto) => {
    const url = '/reservation';
    const status = await postData(url, data);
    return status;
  },
  sendMessage: async (phoneNumber: string) => {
    const url = `/reservation/sms/send?phoneNumber=${phoneNumber}`;
    const status = await postData(url, {});
    return status;
  },
  confirmMessage: async (data: { phoneNumber: string; code: string }) => {
    const url = '/reservation/sms/check';
    const status = await postData(url, data);
    return status;
  },
  resendMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/send-sms';
    const status = await postData(url, reservation);
    return status;
  },
};

export default reservation;
