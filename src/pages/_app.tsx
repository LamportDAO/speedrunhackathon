import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../../config/chakra.config';
import HomeLayout from '../Layouts/HomeLayout';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </ChakraProvider>
  );
}
