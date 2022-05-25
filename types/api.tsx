export type UserRegister = {
  type: number;
  id: string;
  password: string;
};

export type ReservationCreateRequestDto = {
  scheduleId: number;
  phoneNumber?: string;
  message: string;
};

export type ReservationCreateResponseDto = {
  reservationId: number;
};
