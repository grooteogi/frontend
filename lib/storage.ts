export const storage = {
  getToken: () => {
    if (typeof window !== 'undefined') return JSON.parse(window.localStorage.getItem('token') || '{}');
    else return '{}';
  },
  setToken: (token: string) => {
    if (typeof window !== 'undefined') return window.localStorage.setItem('token', JSON.stringify(token));
    else return '{}';
  },
  clearToken: () => {
    if (typeof window !== 'undefined') return window.localStorage.removeItem('token');
    else return '{}';
  },
};
