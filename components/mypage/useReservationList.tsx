import reservation from '@lib/api/reservation';
import { useQuery } from 'react-query';
import { FilterType } from 'types/enum';
import { ReservationListResponseDto } from 'types/response';

const useReservationList = (isHost: boolean, filter: keyof typeof FilterType) => {
  const { isLoading, data, error } = useQuery<ReservationListResponseDto>(
    ['reservationList', isHost, filter],
    async () => (await reservation.getReservationList(isHost, filter)).data,
  );
  console.log('reservationList', data);
  return { isLoading, reservationList: data, error };
};

export default useReservationList;
