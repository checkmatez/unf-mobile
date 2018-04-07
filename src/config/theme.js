import { StyleSheet } from 'react-native'

const font = {
  FONTSIZE: {
    SMALL: 8,
    XSMALL: 10,
    NORMAL: 12,
    XNORMAL: 14,
    MEDIUM: 16,
    XMEDIUM: 18,
    LARGE: 21,
    XLARGE: 24,
    BIG: 32,
    GIANT: 48,
    LARGEST: 56,
  },
}

const main = {
  PRIMARY: '#2db166',
  PRIMARY_LIGHT: '#626a88',
  PRIMARY_LIGHT_TRANSPARENT: 'rgba(98,106,136,.2)',
  PRIMARY_TRANSPARENT: 'rgba(54,59,78,.2)',
  SECONDARY: '#4492f6',
  BLUE: '#68e6db',
  WHITE: '#ffffff',
  WHITE_TRANSPARENT: 'rgba(255,255,255,.2)',
  LIGHT_GREY: '#d8d8d8',
  HAIRLINE: StyleSheet.hairlineWidth,
  EASING: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
  ...font,
}

export default main
