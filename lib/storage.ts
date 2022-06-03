import jwt_decode from 'jwt-decode';

type TokenInfo = {
  ID: number;
  email: string;
  exp: number;
};

export const storage = {
  getToken: function () {
    if (typeof window !== 'undefined') {
      if (this.validateToken()) return localStorage.getItem('token');
    } else return '';
  },
  validateToken: function () {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token');
      if (!token) return false;
      const { exp } = jwt_decode<TokenInfo>(token);
      if (Date.now() >= exp * 1000) {
        this.clearToken();
        return false;
      } else return true;
    } else return false;
  },
  getUserId: function () {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token');
      if (!token) return null;
      const { ID } = jwt_decode<TokenInfo>(token);
      return ID;
    } else return null;
  },
  setToken: function (token: string) {
    if (typeof window !== 'undefined') {
      const accessToken = window.localStorage.setItem('token', JSON.stringify(token));
      console.log('accessToken', accessToken);
      return accessToken;
    } else return '';
  },
  clearToken: function () {
    if (typeof window !== 'undefined') return window.localStorage.removeItem('token');
    else return '';
  },
};
