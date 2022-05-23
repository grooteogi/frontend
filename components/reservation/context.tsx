import React, { createContext, useReducer } from 'react';

type ReservationStateType = {
  scheduleId: number;
  phoneNumber: string;
  message: string;
};

type ReservationAction =
  | { type: 'SET_SCEDULEID'; scheduleId: number }
  | { type: 'SET_PHONENUMBER'; phoneNumber: string }
  | { type: 'SET_MESSAGE'; message: string };

const ReservationContext = createContext<any>(null);

function reserverationReducer(state: ReservationStateType, action: ReservationAction): ReservationStateType {
  switch (action.type) {
    case 'SET_SCEDULEID':
      return {
        ...state,
        scheduleId: action.scheduleId,
      };
    case 'SET_PHONENUMBER':
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
}

export const ReservationProvider = ({ children }: { children: React.ReactNode }) => {
  const [reservationState, dispatchReservation] = useReducer(reserverationReducer, {
    scheduleId: 0,
    phoneNumber: '',
    message: '',
  });
  const setScheduleId = (scheduleId: number) => {
    dispatchReservation({ type: 'SET_SCEDULEID', scheduleId });
  };
  const setPhoneNumber = (phoneNumber: string) => {
    dispatchReservation({ type: 'SET_PHONENUMBER', phoneNumber });
  };
  const setMessage = (message: string) => {
    dispatchReservation({ type: 'SET_MESSAGE', message });
  };
  return (
    <ReservationContext.Provider
      value={{
        state: reservationState,
        dispatch: dispatchReservation,
        scheduleId: reservationState.scheduleId,
        setScheduleId,
        setPhoneNumber,
        setMessage,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => {
  const context = React.useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};
