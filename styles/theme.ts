import { FontWeight } from '../types/enum';

const style = {
  button: {
    color: {
      primary: '#1CDBA1',
      black: '#000000',
      white: '#FFFFFF',
      kakao: '#FEE500',
      lightgray: '#E9E9E9',
      disabled: '#E9E9E9',
      null: '#FFFFFF',
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
      bluegray: '#F2F4F7',
      white: '#FFFFFF',
    },
    fontColor: {
      white: '#FFFFFF',
      black: '#000000',
    },
    borderColor: {
      lightgray: '#EEEEEE',
      bluegray: '#F2F4F7',
      primary: '#1CDBA1',
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
      dimgray: '#4F4F4F',
      lightgray: '#BFBFBF',
      primary: '#1CDBA1',
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
  link: {
    color: {
      primary: '#1CDBA1',
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
  header: {
    fontSizeBasic: {
      sm: '0.65rem',
      md: '0.8rem',
    },
    fontSizeLogo: {
      sm: '0.8rem',
      md: '1rem',
    },
    padding: {
      sm: '0.6rem',
      md: '1rem',
    },
  },
  sortingTab: {
    font: {
      basic: { color: '#737373', weight: FontWeight.REGULAR },
      selected: { color: '#000000', weight: FontWeight.MEDIUM },
    },
  },
  searchBar: {
    backgroundColor: {
      white: '#FFFFFF',
    },
    fontColor: {
      gray: '#878787',
      black: '#000000',
    },
    borderColor: {
      lightgray: '#BFBFBF',
    },
  },
  typoWrapper: {
    color: {
      black: '#000000',
      darkgray: '#DDDDDD',
      lightgrey: '#EAEAEA',
      primary: '#1CDBA1',
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
};

const theme = {
  style,
};

export default theme;
