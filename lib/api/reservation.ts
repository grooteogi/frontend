import { ReservationEntity } from 'types/entity';
import { postData } from './restApi';

const reservation = {
  createReservation: async (reservation: ReservationEntity) => {
    const url = '/reservation';
    const status = await postData(url, reservation);
    return status;
  },
  sendMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/sms/send';
    const status = await postData(url, reservation);
    return status;
  },
  confirmMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/sms/check';
    const status = await postData(url, reservation);
    return status;
  },
  resendMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/sms/send';
    const status = await postData(url, reservation);
    return status;
  },
};

export default reservation;
