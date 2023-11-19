import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Inktrap, Pixel } from '../src/components/FontFamily';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    fonts: {
      heading: Inktrap.style.fontFamily,
      body: Inktrap.style.fontFamily,
    },
    body: {
      bg: mode('#070A20', '#070A20')(props),
      color: mode('white', 'white')(props),
    },
    text: {
      //  marginTop: '0',
    },
  }),
};
