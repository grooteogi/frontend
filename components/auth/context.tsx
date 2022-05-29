import React, { createContext, useReducer } from 'react';
import { UserEntity } from 'types/entity';

type AuthAction = { type: 'SET_NICKNAME'; nickname: string } | { type: 'SET_IMAGEURL'; imageUrl: string };

function authReducer(state: Omit<UserEntity, 'userId'>, action: AuthAction) {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname,
      };
    case 'SET_IMAGEURL':
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    default:
      return state;
  }
}

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    nickname: '',
    imageUrl: '',
  });
  const setNickname = (nickname: string) => {
    dispatch({ type: 'SET_NICKNAME', nickname });
  };
  const setImageUrl = (imageUrl: string) => {
    dispatch({ type: 'SET_IMAGEURL', imageUrl });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setNickname,
        setImageUrl,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};
