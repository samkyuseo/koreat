import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: 'Open Sans, sans-serif',
  body: 'Raleway, sans-serif',
};

const components = {
  Heading: {
    variants: {
      'hero-heading': {
        fontSize: '60px',
        color: 'white',
      },
    },
  },
  Button: {
    baseStyle: {
      fontFamily: 'raleway',
      _focus: { boxShadow: 'none' },
    },
    variants: {
      'navbar-button': {
        background: 'transparent',
        color: 'gray.600',
        _hover: {
          backgroundColor: 'transparent',
          color: 'red.500',
        },
        _active: {
          backgroundColor: 'transparent',
          color: 'red.500',
        },
        _focus: {
          backgroundColor: 'transparent',
          color: 'red.500',
        },
      },
      'sign-in-button': {
        background: 'blue.600',
        color: 'white',
        borderRadius: '100px',
        _hover: {
          backgroundColor: 'blue.500',
        },
        _active: {
          backgroundColor: 'blue.500',
        },
        _focus: {
          backgroundColor: 'blue.500',
        },
      },
      'login-button': {
        background: 'transparent',
        color: 'black',
        borderRadius: '100px',
        _hover: {
          backgroundColor: 'transparent',
          color: 'blue.600',
        },
        _active: {
          backgroundColor: 'transparent',
          color: 'blue.600',
        },
        _focus: {
          backgroundColor: 'transparent',
          color: 'blue.600',
        },
      },
      'hero-button': {
        background: 'red.500',
        color: 'white',
        borderRadius: '100px',
        fontSize: '23px',
        paddingY: '25px',
        paddingX: '20px',
        fontFamily: 'Open Sans',
        _hover: {
          backgroundColor: 'red.600',
        },
        _active: {
          backgroundColor: 'red.600',
        },
        _focus: {
          backgroundColor: 'red.600',
        },
      },
      'cta-button': {
        background: 'red.500',
        color: 'white',
        borderRadius: '100px',
        fontSize: '23px',
        paddingY: '28px',
        paddingX: '40px',
        fontFamily: 'Open Sans',
        _hover: {
          backgroundColor: 'red.600',
        },
        _active: {
          backgroundColor: 'red.600',
        },
        _focus: {
          backgroundColor: 'red.600',
        },
      },
    },
  },
};

const colors = {
  brand: {
    50: '#ecefff',
    100: '#cbceeb',
    200: '#a9aed6',
    300: '#888ec5',
    400: '#666db3',
    500: '#4d5499',
    600: '#3c4178',
    700: '#2a2f57',
    800: '#181c37',
    900: '#080819',
  },
};
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({ components, colors, fonts });
