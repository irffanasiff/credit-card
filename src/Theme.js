import { extendTheme } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/archivo';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    noire: {
      blue: '#469BFF',
      black: '#2E2E2E',
      blackBg: '#171717',
      lightGray: '#b8b8b8',
      darkGray: '#828282',
    },
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Archivo, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        // fontFamily: 'sans',
        background: '#ffffff',
        color: '#2E2E2E',
      },
      '&::-webkit-scrollbar': {
        width: '0px',
      },
      '&::-webkit-scrollbar-track': {
        width: '0px',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '0px',
      },
    },
  },
});

export default theme;
