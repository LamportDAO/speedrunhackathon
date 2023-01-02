import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from '../theme/components/buttons';
import { styles } from '../theme/styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components: {
    Button,
  },
});

export default theme;
