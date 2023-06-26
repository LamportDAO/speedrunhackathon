import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Inktrap, Joystix } from '../src/components/FontFamily';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    fonts: {
      heading: Inktrap.style.fontFamily,
      body: Inktrap.style.fontFamily,
    },
    body: {
      bg: mode('#01010A', '#01010A')(props),
      color: mode('white', 'white')(props),
    },
    text: {
      //  marginTop: '0',
    },
  }),
};
