import { ChildInterface } from '../../interfaces/children';
import { Center, Container } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/navigation/Header';
import Background from './Background';
import { Inktrap } from '../components/FontFamily';
import Footer from '../components/navigation/Footer';

const HomeLayout = ({ children }: ChildInterface) => {
  return (
    <Container
      as='main'
      className={Inktrap.className}
      sx={{
        background: '#01010A',
      }}
      p='0'
      maxW={'full'}
    >
      <Center position={'absolute'} w='100vw' zIndex={'0'}>
        <Background />
      </Center>
      <Container
        p='0'
        className={Inktrap.style.fontFamily}
        position={'absolute'}
        maxW={'full'}
        zIndex='999'
      >
        <Header />
        {children}
        <Footer />
      </Container>
    </Container>
  );
};

export default HomeLayout;
