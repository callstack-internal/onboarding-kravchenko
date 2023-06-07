import {Dimensions} from 'react-native';

export const sizes = {
  zero: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  icon: 32,
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
  '1/2': '50%',
  '1/3': '33.333%',
  '2/3': '66.666%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  full: '100%',
  auto: 'auto',
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  circle: 999,
};

export const colors = {
  transparent: 'transparent',
  background: '#27374D',
  secondaryBackground: '#526D82',
  foreground: '#DDE6ED',
  secondaryForeground: '#9DB2BF',
};

export const fonts = {
  heading: {
    color: colors.foreground,
    fontSize: 24,
    fontWeight: '800',
  },
  subheading: {
    color: colors.foreground,
    fontSize: 18,
    fontWeight: '500',
  },
  caption: {
    color: colors.foreground,
    fontSize: 16,
    fontWeight: '400',
  },
} as const;

export const opacity = {
  initial: 1,
  active: 0.7,
  inactive: 0.3,
};
