const color = {
  primary: '#1CDBA1',
  danger: '#FF5D39',
  gray100: '#F7F7F7',
  gray200: '#E7E7E7',
  gray300: '#D7D7D7',
  gray400: '#C7C7C7',
  gray500: '#B7B7B7',
  gray600: '#A7A7A7',
  gray700: '#979797',
  darkgray: '#4E4E4E',
  deepdarkgray: '#3C424B',
  white: '#FFFFFF',
  black: '#000000',
  kakao: '#FEE500',
  none: null,
};

const weight = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300,
  thin: 100,
};

const fontSize = {
  xxs: '0.75rem', // 12px
  xs: '0.875rem', // 14px
  sm: '1rem', // 16px
  md: '1.125rem', // 18px
  lg: '1.25rem', // 20px
  xl: '1.5rem', // 24px
};

const responsive = {
  mobile: '@media (max-width: 767px)',
  tablet: '@media (min-width: 768px) and (max-width: 1059px)',
  pc: '@media (min-width: 1060px)',
};

const borderRadius = {
  sm: '4px',
  md: '8px',
};

const theme = {
  color,
  weight,
  fontSize,
  responsive,
  borderRadius,
};

export default theme;
