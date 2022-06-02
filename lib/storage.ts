export const storage = {
  getToken: () => {
    if (typeof window !== 'undefined') return JSON.parse(window.localStorage.getItem('token') || '{}');
    else return '';
  },
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      const accessToken = window.localStorage.setItem('token', JSON.stringify(token));
      console.log('accessToken', accessToken);
      return accessToken;
    } else return '';
  },
  clearToken: () => {
    if (typeof window !== 'undefined') return window.localStorage.removeItem('token');
    else return '';
  },
};
