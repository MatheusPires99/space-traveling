import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#F8F8F8',
      '300': '#D7D7D7',
      '400': '#BBBBBB',
      '900': '#1A1D23',
    },
    pink: {
      '400': '#FF57B2',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'gray.300',
      },
    },
  },
});
