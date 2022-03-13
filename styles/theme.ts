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
        background: 'blue.700',
        color: 'white',
        borderRadius: '100px',
        _hover: {
          backgroundColor: 'blue.600',
        },
        _active: {
          backgroundColor: 'blue.600',
        },
        _focus: {
          backgroundColor: 'blue.600',
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

export const theme = extendTheme({ components, fonts });
