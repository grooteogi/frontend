import { FontWeight } from '../types/style';

const style = {
  button: {
    color: {
      primary: '#1CDBA1',
      black: '#000000',
      white: '#FFFFFF',
      kakao: '#FEE500',
      lightgray: '#E9E9E9',
    },
    fontColor: {
      white: '#FFFFFF',
      black: '#000000',
      darkgray: '#5A5A5A',
    },
    borderColor: {
      lightgray: '#BBBBBB',
      none: null,
      primary: '#1CDBA1',
    },
  },
  hashtag: {
    color: {
      lightgray: '#EEEEEE',
      white: '#FFFFFF',
    },
    fontColor: {
      white: '#FFFFFF',
      black: '#000000',
    },
    borderColor: {
      lightgray: '#EEEEEE',
      primary: '#1CDBA1',
      none: null,
    },
    display: {
      display_none: 'none',
      display_inline: 'inline',
    },
  },
  typo: {
    color: {
      black: '#000000',
      darkgray: '#333333',
    },
    weight: {
      bold: 700,
      medium: 500,
      regular: 400,
      light: 300,
      thin: 100,
    },
    sizes: {
      xs: { fontSize: '0.75rem', weight: FontWeight.REGULAR },
      sm: { fontSize: '0.875rem', weight: FontWeight.REGULAR },
      md: { fontSize: '1rem', weight: FontWeight.REGULAR },
      lg: { fontSize: '1.5rem', weight: FontWeight.MEDIUM },
    },
  },
  input: {
    backgroundColor: {
      white: '#FFFFFF',
    },
    fontColor: {
      gray: '#878787',
      black: '#000000',
    },
    borderColor: {
      lightgray: '#BFBFBF',
      none: null,
    },
    sizes: {
      sm: { fontSize: '0.875rem' },
      md: { fontSize: '1rem' },
    },
  },
  title: {
    color: {
      black: '#000000',
      darkgray: '#DDDDDD',
    },
    weight: {
      bold: 700,
      medium: 500,
      regular: 400,
      light: 300,
      thin: 100,
    },
    sizes: {
      h4: { fontSize: '0.875rem', weight: FontWeight.MEDIUM },
      h3: { fontSize: '1rem', weight: FontWeight.MEDIUM },
      h2: { fontSize: '1.25rem', weight: FontWeight.MEDIUM },
      h1: { fontSize: '1.5rem', weight: FontWeight.MEDIUM },
    },
  },
  primary: '#1896BD',
  yellow: '#FFB84D',
  white: '#FFFFFF',
  red: '#FF5D39',
  deepgray: '#C4C4C4',
  lightgrey: '#EAEAEA',
  black: '#000000',
  lightblack: '#545454',
  lightyelloew: '#FFDCA8',
  themeGreen: '#1CDBA1',
};

const theme = {
  style,
};

export default theme;
