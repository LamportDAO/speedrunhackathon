import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Button = {
  baseStyles: {},
  backgroundColor: 'black',
  variants: {
    solid: (props: StyleFunctionProps) => ({
      borderRadius: '10rem',
      color: 'white',
      padding: '8px 22px',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.20)',
      fontWeight: '400',
      transition: 'all 0.6s',
      _hover: {
        transition: 'all 0.5s',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        shadow: '2xl',
      },
      _loading: {
        transition: 'all 0.5s',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        shadow: '2xl',
      },
      _active: {
        transition: 'all 0.5s',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        shadow: '2xl',
      },
    }),
    gradient: (props: StyleFunctionProps) => ({
      borderRadius: '10rem',
      color: 'white',
      fontWeight: '400',
      padding: '8px 22px',
      backdropFilter: 'blur(10px)',
      background:
        'linear-gradient(247.98deg, #404DCF -8.03%, #404DCF 7.2%, #D273D9 109.33%);',
      transition: 'all 0.6s',
      _hover: {
        transition: 'all 0.4s',
        background:
          'linear-gradient(230.98deg, #404DCF -8.03%, #404DCF 47.2%, #D273D9 109.33%);',
        shadow: '2xl',
      },
      _loading: {
        backgroundColor: 'white',
        color: 'black',
      },
      _active: {
        color: 'white',
        transition: 'all 0.6s',
        backgroundColor: 'transparent',
      },
    }),
    outline: (props: StyleFunctionProps) => ({
      textTransform: 'uppercase',
      borderRadius: '0rem',
      backgroundColor: 'transparent',
      color: 'white',
      padding: '8px 18px',
      fontWeight: '600',
      transition: 'all 0.6s',
      _hover: {
        transition: 'all 0.4s',
        backgroundColor: 'transparent',
      },
      _active: {
        color: 'black',
        transition: 'all 0.6s',
        backgroundColor: 'white',
      },
    }),
  },
  sizes: {
    md: {
      fontSize: '14px',
      //height: '3rem',
    },
    sm: {
      fontSize: '12px',
      height: '2.5rem',
      padding: '0.5rem 1rem',
    },
  },
};
